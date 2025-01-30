import { useState } from "react";
import { ChevronUp, ChevronDown, ShoppingCart } from "lucide-react";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	originalPrice: number;
	imageUrl: string;
	inStock: boolean;
	onSale: boolean;
	quantity: number;
	platformBadge: string;
	description: string;
}

interface ProductCardProps {
	item: CartItem;
	onAddToCart?: (item: CartItem) => void;
	onViewDetails?: (id: string) => void;
	maxQuantity?: number;
}

export default function ProductCard({ item, onAddToCart, onViewDetails, maxQuantity = 8 }: ProductCardProps) {
	const [quantity, setQuantity] = useState(1);

	const handleQuantityChange = (delta: number) => {
		const newQuantity = quantity + delta;
		if (newQuantity >= 1 && newQuantity <= maxQuantity) {
			setQuantity(newQuantity);
		}
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
				{item.inStock && (
					<div className="quantity-selector">
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
				{item.inStock && (
					<button className="add-button" onClick={() => onAddToCart?.({ ...item, quantity })}>
						Add
						<ShoppingCart size={16} />
					</button>
				)}
			</div>
		</article>
	);
}
