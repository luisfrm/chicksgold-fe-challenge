import { ShoppingCart } from "lucide-react";
import useStore from "../stores/useStore";

const CartButton = () => {
	const items = useStore(state => state.cart.items);

	return (
		<div className="flex align-center" style={{height: "100%"}}>
			<button className="cart-button">
				<ShoppingCart className="header-cart" />
				CART
        &nbsp;<span className="cart-total">({items.length})</span>
			</button>
		</div>
	);
};

export default CartButton;
