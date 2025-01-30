import { SidebarProvider } from "../context/SidebarContext";
import { Sidebar, SidebarContent, SidebarDialog, SidebarFooter, SidebarHeader, SidebarTitle } from "./Sidebar";
import CartButton from "./CartButton";
import { ShoppingCart } from "lucide-react";

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

export interface Cart {
	items: CartItem[];
	total: number;
}

const sampleCart: Cart = {
	items: [
		{
			id: "1",
			name: "Gold Package",
			price: 19.99,
			originalPrice: 24.99,
			imageUrl: "/placeholder.svg?height=80&width=80",
			inStock: true,
			onSale: true,
			quantity: 1,
			platformBadge: "RS3",
			description: "Premium gold package for RS3",
		},
		{
			id: "2",
			name: "Silver Package",
			price: 9.99,
			originalPrice: 14.99,
			imageUrl: "/placeholder.svg?height=80&width=80",
			inStock: true,
			onSale: false,
			quantity: 2,
			platformBadge: "RS3",
			description: "Standard silver package for RS3",
		},
	],
	total: 39.97,
};

export default function CartSidebar() {
	return (
		<SidebarProvider>
			<Sidebar className="flex align-center h-100" trigger={<CartButton />}>
				<SidebarDialog>
					<SidebarHeader>
						<SidebarTitle>
							<ShoppingCart className="h-6 w-6" />
							<h2>Your Cart</h2>
						</SidebarTitle>
					</SidebarHeader>
					<SidebarContent>
						<div className="cart-container">
							<div className="cart-items">
								{sampleCart.items.map(item => (
									<div key={item.id} className="cart-item">
										<img src={item.imageUrl || "/placeholder.svg"} alt={item.name} className="item-image" />
										<div className="item-content">
											<div className="item-header">
												<div>
													<h3 className="item-title">{item.name}</h3>
													<span className="platform-badge">{item.platformBadge}</span>
												</div>
												<div className="item-price">
													<div className="current-price">${item.price.toFixed(2)}</div>
													{item.onSale && (
														<div className="original-price-container">
															<p className="original-price">${item.originalPrice.toFixed(2)}</p>
															<div className="line-through"></div>
														</div>
													)}
												</div>
											</div>
											<p className="item-description">{item.description}</p>
											<div className="item-footer">
												<span className="quantity">Qty: {item.quantity}</span>
												<span className={item.inStock ? "in-stock" : "out-of-stock"}>
													{item.inStock ? "In Stock" : "Out of Stock"}
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</SidebarContent>
					<SidebarFooter>
						<div className="total">
							<span>Total</span>
							<span>${sampleCart.total.toFixed(2)}</span>
						</div>
						<button className="checkout-button">Checkout</button>
					</SidebarFooter>
				</SidebarDialog>
			</Sidebar>
		</SidebarProvider>
	);
}
