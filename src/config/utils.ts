import { CartItem, Option } from "./types";

export const uniquePlatformBadges = (products: CartItem[]): Option[] => {
	return [...new Set(products.map(item => item.platformBadge))].map(platformBadge => ({
		value: platformBadge,
		label: platformBadge,
	}));
};

export const getProductsPerPage = (products: CartItem[], page: number, itemsPerPage=20): CartItem[] => {
	const startIndex = (page - 1) * 10;
	const endIndex = startIndex + itemsPerPage;

	return products.slice(startIndex, endIndex);
};

export const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}