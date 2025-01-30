import { CartItem, Features, Genre, Option, Review } from "./types";

export const uniquePlatformBadges = (products: CartItem[]): Option[] => {
	return [...new Set(products.map(item => item.platformBadge))].map(platformBadge => ({
		value: platformBadge,
		label: platformBadge,
	}));
};

export const getProductsPerPage = (products: CartItem[], page: number, itemsPerPage = 20): CartItem[] => {
	const startIndex = (page - 1) * 10;
	const endIndex = startIndex + itemsPerPage;

	return products.slice(startIndex, endIndex);
};

export const getRandomNumber = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
};

export const getRandomGenre = (): Genre => {
	const genres: Genre[] = [
		"Action",
		"Adventure",
		"Fantasy",
	];
	return genres[Math.floor(Math.random() * genres.length)];
};

export const getRandomReview = (): Review => {
	const reviews: Review[] = ["Positive", "Mixed", "Negative"];
	return reviews[Math.floor(Math.random() * reviews.length)];
};

export const getRandomFeatures = (): Features[] => {
	const features: Features[] = ["New", "Featured", "Limited Edition"];

	const featureSet = new Set(features);
	const randomFeatures = Array.from(featureSet).sort(() => Math.random() - 0.5);
	return randomFeatures;
};

export const getIsTrendingRandom = (): boolean => {
	return Math.random() < 0.5;
};

export const getRandomRating = (): number => {
	return Math.floor(Math.random() * 5) + 1;
};

export const isProductOnCart = (id: string, products: CartItem[]): boolean => {
	return products.some(product => product.id === id);
}