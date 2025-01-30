import { create } from "zustand";
import { Cart, CartItem } from "../config/types";

interface AppState {
	cart: Cart;
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
}

const CART_INITIAL_STATE = {
	items: [],
	total: 0,
	totalItems: 0,
};

const useStore = create<AppState>(set => ({
	cart: CART_INITIAL_STATE,
	addToCart: (item: CartItem) =>
		set(state => ({
			cart: {
				...state.cart,
				items: [...state.cart.items, item],
				total: [...state.cart.items, item].reduce((acc, item) => acc + item.price * item.quantity, 0),
				totalItems: [...state.cart.items, item].reduce((acc, item) => acc + item.quantity, 0),
			},
		})),
	removeFromCart: (id: string) =>
		set(state => {
			const item = state.cart.items.find(item => item.id === id);
			if (!item) return state;
			return {
				cart: {
					...state.cart,
					items: state.cart.items.filter(item => item.id !== id),
					total: state.cart.total - item.price * item.quantity,
					totalItems: state.cart.totalItems - item.quantity,
				},
			};
		}),
	clearCart: () =>
		set({
			cart: CART_INITIAL_STATE,
		}),
}));

export default useStore;
