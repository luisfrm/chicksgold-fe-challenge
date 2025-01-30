import { ShoppingCart } from "lucide-react";
import CartSidebar from "./CartSidebar";
import useStore from "../stores/useStore";

interface WidgetProps {
	onClick?: () => void;
}

const CartWidget = ({ onClick }: WidgetProps) => {
  const {total, totalItems} = useStore(state => state.cart);
  const cartTrigger = (
    <button className="cart-button-widget" onClick={onClick} aria-label={`Open cart with ${totalItems} items`}>
			<div className="cart-icon-container">
				<ShoppingCart size={20} />
				{totalItems > 0 && <span className="cart-count">{totalItems}</span>}
			</div>
			<div className="cart-total">
				<span className="total-label">Total</span>
				<span className="total-amount">${total.toFixed(2)}</span>
			</div>
			<div className="cart-tooltip">Click to view cart</div>
		</button>
  )

	return (
		<CartSidebar>{cartTrigger}</CartSidebar>
	);
};

export default CartWidget;
