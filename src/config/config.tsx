import {
	DollarSign,
	Euro,
	IndianRupee,
	JapaneseYen,
	PoundSterling,
} from "lucide-react";
import { HeaderItem, MenuItem, Option, Products } from "./types";

const products: Products = {
	page: 1,
	totalPages: 3,
	itemsPerPage: 20,
	totalItems: 15,
	cartItems: [
		{
			id: "1",
			name: "Blue Partyhat",
			price: 450.0,
			originalPrice: 622.5,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: true,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "2",
			name: "Red Partyhat",
			price: 400.0,
			originalPrice: 550.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: true,
			quantity: 2,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "3",
			name: "Green Partyhat",
			price: 425.0,
			originalPrice: 600.0,
			imageUrl: "https://picsum.photos/200",
			inStock: false,
			onSale: false,
			quantity: 0,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "4",
			name: "Yellow Partyhat",
			price: 380.0,
			originalPrice: 525.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: true,
			quantity: 3,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "5",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "6",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "7",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "8",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "9",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "10",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
		{
			id: "11",
			name: "Purple Partyhat",
			price: 500.0,
			originalPrice: 650.0,
			imageUrl: "https://picsum.photos/200",
			inStock: true,
			onSale: false,
			quantity: 1,
			platformBadge: "RS3",
			description: "Lorem ipsum dolor sit amet consectetur sadipscing elitr.",
		},
	],
};

export const fetchProducts = async (): Promise<Products> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(products);
		}, 200);
	});
};

export const headerItems: HeaderItem[] = [
	{
		label: "Currency",
		url: "#",
	},
	{
		label: "Items",
		url: "#",
	},
	{
		label: "Accounts",
		url: "#",
	},
	{
		label: "Services",
		url: "#",
	},
	{
		label: "Swap",
		url: "#",
	},
	{
		label: "Sell",
		url: "#",
	},
];

export const menuItems: MenuItem[] = [
	{ id: "usd", label: "USD", icon: <DollarSign className="h-4 w-4" /> },
	{ id: "eur", label: "EUR", icon: <Euro className="h-4 w-4" /> },
	{ id: "gbp", label: "GBP", icon: <PoundSterling className="h-4 w-4" /> },
	{ id: "yen", label: "YEN", icon: <JapaneseYen className="h-4 w-4" /> },
	{ id: "rup", label: "Ruppe", icon: <IndianRupee className="h-4 w-4" /> },
];

export const menuItemsMobile: Option[] = [
	{ value: "usd", label: "USD" },
	{ value: "eur", label: "EUR" },
	{ value: "gbp", label: "GBP" },
	{ value: "yen", label: "YEN" },
	{ value: "rup", label: "Ruppe" },
];
