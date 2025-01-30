import { ShoppingCart } from "lucide-react";
import useStore from "../stores/useStore";

const CartButton = () => {
	const totalItems = useStore(state => state.cart.totalItems);

	return (
		<div className="flex align-center" style={{height: "100%"}}>
			<button className="cart-button">
				<ShoppingCart className="header-cart" />
				CART
        &nbsp;<span className="cart-total">({totalItems})</span>
			</button>
		</div>
	);
};

export default CartButton;
