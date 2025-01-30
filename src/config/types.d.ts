export type Genre =
	| "Action"
	| "Adventure"
	| "Fantasy"

export type Review = "Positive" | "Mixed" | "Negative";

export type Features = "New" | "Featured" | "Limited Edition";

export interface CartItem {
	id: string;
	name: string;
	price: number;
	originalPrice: number;
	imageUrl: string;
	inStock: boolean;
	onSale: boolean;
	quantity: number;
	genre: Genre;
	rating: number;
	features: Features[];
	reviews: Review;
	isTrending: boolean;
	platformBadge: string;
	description: string;
}

export interface Cart {
	items: CartItem[]; // Articles in the cart
	total: number; // Price of all items in the cart
	totalItems: number;
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
