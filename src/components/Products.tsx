import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../config/config";
import { Products as ProductsType, Option } from "../config/types";
import Pagination from "./Pagination";
import CustomSelect from "./CustomSelect";
import { uniquePlatformBadges } from "../config/utils";

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
		setPlatformBadges([{ label: "All", value: "All" }, ...fetchedPlatformBadges]);
	}, [products]);

	return (
		<section id="products">
			<div id="filters">
				<CustomSelect placeholder="Select a game" options={platformBadges} onChange={value => console.log(value)} />
			</div>
			<section id="products-container">
				<h4 className="product-title">
					Showing {products.itemsPerPage * products.page} from {products.totalItems}
				</h4>
				<div id="products-card">
					{products.cartItems.map((product, index) => (
						<ProductCard key={index} item={product} onAddToCart={() => console.log("Added to cart")} />
					))}
				</div>
				<Pagination totalPages={10} />
			</section>
		</section>
	);
};

export default Products;
