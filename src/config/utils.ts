import { CartItem, Option } from "./types";

export const uniquePlatformBadges = (products: CartItem[]): Option[] => {
	return [...new Set(products.map(item => item.platformBadge))].map(platformBadge => ({
		value: platformBadge,
		label: platformBadge,
	}));
};
