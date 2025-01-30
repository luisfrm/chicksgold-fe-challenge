import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../config/config";
import { Products as ProductsType, Option } from "../config/types";
import Pagination from "./Pagination";
import CustomSelect from "./CustomSelect";
import { uniquePlatformBadges } from "../config/utils";
import { Feather, HandCoins, SlidersHorizontal, Sword } from "lucide-react";
import SearchInput from "./SearchInput";

const INITIAL_PRODUCTS: ProductsType = {
	page: 1,
	totalPages: 3,
	itemsPerPage: 20,
	totalItems: 15,
	cartItems: [],
};

const Products = () => {
	const [products, setProducts] = useState<ProductsType>(INITIAL_PRODUCTS);

	useEffect(() => {
		fetchProducts().then(data => {
			setProducts(data);
		});
	}, []);

	const [platformBadges, setPlatformBadges] = useState<Option[]>([]);

	useEffect(() => {
		const fetchedPlatformBadges = uniquePlatformBadges(products.cartItems);
		const allOption = { label: "All", value: "All" };
		setPlatformBadges([allOption, ...fetchedPlatformBadges]);
	}, [products]);

	return (
		<section id="products">
			<div id="filters">
				<CustomSelect
					icon={<Sword />}
					placeholder="Select a game"
					options={platformBadges}
					onChange={value => console.log(value)}
				/>
				<div id="search-bar">
					<SearchInput placeholder="Search" />
					<CustomSelect
						icon={<HandCoins />}
						iconColor="var(--accent-color)"
						placeholder="All"
						options={platformBadges}
						onChange={value => console.log(value)}
						label="Price"
					/>
					<CustomSelect
						icon={<Feather />}
						iconColor="var(--accent-color)"
						placeholder="All"
						options={platformBadges}
						onChange={value => console.log(value)}
						label="Item Type"
					/>
				</div>
			</div>
			<section id="products-container">
				<header id="products-header">
					<h4 className="product-title">
						Showing {products.itemsPerPage * products.page} from {products.totalItems}
					</h4>
					<CustomSelect
						icon={<SlidersHorizontal />}
						iconColor="var(--accent-color)"
						placeholder="Featured"
						options={platformBadges}
						onChange={value => console.log(value)}
						label="Sort By"
					/>
				</header>
				<section id="products-card">
					{products.cartItems.map((product, index) => (
						<ProductCard key={index} item={product} onAddToCart={() => console.log("Added to cart")} />
					))}
				</section>
				<Pagination totalPages={products.totalPages} />
			</section>
		</section>
	);
};

export default Products;
