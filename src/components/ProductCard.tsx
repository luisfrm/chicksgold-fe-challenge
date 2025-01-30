import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown, ShoppingCart, Trash2 } from "lucide-react";
import { CartItem } from "../config/types";
import useStore from "../stores/useStore";
import { isProductOnCart } from "../config/utils";

interface ProductCardProps {
	item: CartItem;
	onAddToCart?: (item: CartItem) => void;
	onRemoveFromCart?: (id: string) => void;
	onViewDetails?: (id: string) => void;
	maxQuantity?: number;
}

export default function ProductCard({
	item,
	onAddToCart,
	onRemoveFromCart,
	onViewDetails,
	maxQuantity = 8,
}: ProductCardProps) {
	const [quantity, setQuantity] = useState<number>(1);
	const cart = useStore(state => state.cart);
	const [isOnCart, setIsOnCart] = useState(false);

	useEffect(() => {
		setIsOnCart(isProductOnCart(item.id, cart.items));
	}, [cart.items, item.id]);

	const handleQuantityChange = (delta: number) => {
		const newQuantity = quantity + delta;
		if (newQuantity >= 1 && newQuantity <= maxQuantity) {
			setQuantity(newQuantity);
		}
	};

	const handleAddToCart = (cartItem: CartItem, cartQuantity: number) => {
		onAddToCart?.({ ...cartItem, quantity: cartQuantity });
		setQuantity(1);
	};

	return (
		<article className="product-card">
			<header className="card-header">
				<div className="sale-and-stock">
					<div className="sale-badge">
						{item.onSale && (
							<>
								<span style={{ fontSize: "24px", color: "var(--accent-color)" }}>•</span>
								<span className="sale-text">ON SALE</span>{" "}
							</>
						)}
					</div>
					<div className={`stock-badge ${!item.inStock ? "out-of-stock" : ""}`}>
						<span>{item.inStock ? "In stock" : "Out of stock"}</span>
					</div>
				</div>
				{!isOnCart && item.inStock && item.onSale && item.quantity > 0 && (
					<div className={`quantity-selector ${isOnCart  ? "hidden" : ""}`}>
						<div id="quantity-input">{quantity}</div>
						<div className="chevron-section">
							<button onClick={() => handleQuantityChange(+1)}>
								<ChevronUp size={16} />
							</button>
							<button onClick={() => handleQuantityChange(-1)}>
								<ChevronDown size={16} />
							</button>
						</div>
					</div>
				)}
			</header>

			<main className="card-content">
				<img src={item.imageUrl} alt={item.name} className="product-image" />

				<header className="product-header">
					<h3 className="product-title">{item.name}</h3>
					<span className="platform-badge">{item.platformBadge}</span>
				</header>

				<section className="product-price-section">
					{item.onSale && <p className="current-price">${item.price.toFixed(2)}</p>}
					{item.onSale && item.originalPrice && (
						<div className="original-price-container">
							<p className="original-price">${item.originalPrice.toFixed(2)}</p>
							<div className="line-through"></div>
						</div>
					)}
				</section>

				<p className="product-description">{item.description}</p>
			</main>

			<div className="card-footer">
				<button className="details-button" onClick={() => onViewDetails?.(item.id)}>
					Details
				</button>
				{item.inStock && item.onSale && !isOnCart && (
					<button className="add-button" onClick={() => handleAddToCart(item, quantity)}>
						Add
						<span className="add-button-icon">
							<ShoppingCart size={16} />
						</span>
					</button>
				)}

				{item.inStock && item.onSale && isOnCart && (
					<button className="add-button remove" onClick={() => onRemoveFromCart?.(item.id)}>
						Remove
						<span className="add-button-icon">
							<Trash2 size={16} />
						</span>
					</button>
				)}
			</div>
		</article>
	);
}
