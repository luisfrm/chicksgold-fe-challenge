export interface CartItem {
	id: string; // Identificador único del artículo
	name: string; // Nombre del artículo
	price: number; // Precio actual del artículo
	originalPrice: number; // Precio original del artículo antes del descuento
	imageUrl: string; // URL de la imagen del artículo
	inStock: boolean; // Indica si el artículo está en stock
	onSale: boolean; // Indica si el artículo está en oferta
	quantity: number; // Cantidad del artículo en el carrito
	platformBadge: string; // Etiqueta de la plataforma (por ejemplo, "RS3")
	description: string; // Descripción del artículo
}

export interface Cart {
	items: CartItem[]; // Artículos en el carrito
	total: number; // Precio total del carrito
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
