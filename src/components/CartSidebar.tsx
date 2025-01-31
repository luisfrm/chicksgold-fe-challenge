import { SidebarProvider } from "../context/SidebarContext";
import { Sidebar, SidebarContent, SidebarDialog, SidebarFooter, SidebarHeader, SidebarTitle } from "./Sidebar";
import { ShoppingCart, Trash2 } from "lucide-react";
import useStore from "../stores/useStore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CartSidebar({ children }: any) {
	const { cart, clearCart, removeFromCart } = useStore(state => state); 

	return (
		<SidebarProvider>
			<Sidebar className="flex align-center h-100" trigger={children}>
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
								{cart.items.map(item => (
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
													<div className="total-price">${(item.price * item.quantity).toFixed(2)}</div>
												</div>
											</div>
											<p className="item-description">{item.description}</p>
											<div className="item-footer">
												<span className="quantity">Quantity: {item.quantity}</span>
												<span className={item.inStock ? "in-stock" : "out-of-stock"}>
													{item.inStock ? "In Stock" : "Out of Stock"}
												</span>
												<button className="remove-button" onClick={() => removeFromCart(item.id)}>
													<Trash2 />
												</button>
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
							<span>${cart.total.toFixed(2)}</span>
						</div>
						<button className="checkout-button">Checkout</button>
						<button className="checkout-button clear-cart" onClick={clearCart}>Clear Cart</button>
					</SidebarFooter>
				</SidebarDialog>
			</Sidebar>
		</SidebarProvider>
	);
}
