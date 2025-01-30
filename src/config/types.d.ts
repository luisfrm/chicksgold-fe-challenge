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
	items: CartItem[]; // Articles in the cart
	total: number; // Price of all items in the cart
}

export interface Products {
	page: number;
	totalPages: number;
	itemsPerPage: number;
	totalItems: number;
	cartItems: CartItem[];
}

export interface Option {
	value: string;
	label: string;
}

interface HeaderItem {
	label: string;
	url: string;
}

export interface MenuItem {
	id: string;
	label: string;
	icon?: React.ReactNode;
}
