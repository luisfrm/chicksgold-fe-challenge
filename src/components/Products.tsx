import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts, priceOptions, sortByOptions } from "../config/config";
import { Products as ProductsType, Option, CartItem } from "../config/types";
import Pagination from "./Pagination";
import CustomSelect from "./CustomSelect";
import { uniquePlatformBadges } from "../config/utils";
import { Feather, HandCoins, SlidersHorizontal, Sword } from "lucide-react";
import SearchInput from "./SearchInput";
import ProductDialog from "./ProductDialog";

const INITIAL_PRODUCTS: ProductsType = {
	page: 1,
	totalPages: 3,
	itemsPerPage: 20,
	totalItems: 15,
	cartItems: [],
};

const Products = () => {
	const [products, setProducts] = useState<ProductsType>(INITIAL_PRODUCTS);
	const [platformBadges, setPlatformBadges] = useState<Option[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortBy, setSortBy] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [itemType] = useState<string>("");
	const [page, setPage] = useState<number>(1);
	const [game, setGame] = useState<string>("");
	const [totalPages, setTotalPages] = useState<number>(1);
	const itemsPerPage = 20;
	const [isOpenViewDetails, setIsOpenViewDetails] = useState<boolean>(false);
	const [selectedProduct, setSelectedProduct] = useState<CartItem | undefined>(undefined);

	useEffect(() => {
		fetchProducts().then(data => {
			setProducts(data);
		});
	}, []);

	const handleViewDetails = (id: string) => {
		setSelectedProduct(products.cartItems.find(item => item.id === id));
		setIsOpenViewDetails(true);
		console.log("View details");
	};

	const handleCloseViewDetails = () => {
		setIsOpenViewDetails(false);
	};

	const handleAddToCart = (item: CartItem) => {
		console.log(item);
	};

	const handleSearch = (searchTerm: string) => {
		setSearchTerm(searchTerm);
		setPage(1);
	};

	const handleSortBy = (sortBy: string) => {
		setSortBy(sortBy);
		setPage(1);
	};

	const handlePage = (page: number) => {
		setPage(page);
	};

	const handlePrice = (price: string) => {
		setPrice(price);
		setPage(1);
	};

	const handleItemType = () => {
		setPage(1);
	};

	const handleByGame = (game: string) => {
		setGame(game);
		setPage(1);
	};



	useEffect(() => {
		const fetchedPlatformBadges = uniquePlatformBadges(products.cartItems);
		const allOption = { label: "All", value: "" };
		setPlatformBadges([allOption, ...fetchedPlatformBadges]);
	}, [products]);

	const filteredProducts = useMemo(() => {
		let result = [...products.cartItems];

		if (searchTerm) {
			result = result.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
		}

		// Sorting
		if (itemType) {
			result = result.filter(product => product.platformBadge === itemType);
		}

		// Game filtering
		if (game) {
			result = result.filter(product => product.platformBadge === game);
		}

		// Price filtering
		if (price) {
			const [minPrice, maxPrice] = price.split("-").map(Number);
			result = result.filter(product => {
				if (maxPrice) {
					return product.price >= minPrice && product.price <= maxPrice;
				}
				return product.price >= minPrice;
			});
		}

		// Sorting
		switch (sortBy) {
			case "name-asc":
				result.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "name-desc":
				result.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case "price-asc":
				result.sort((a, b) => a.price - b.price);
				break;
			case "price-desc":
				result.sort((a, b) => b.price - a.price);
				break;
			case "inStock":
				result.sort((a, b) => (a.inStock === b.inStock ? 0 : a.inStock ? -1 : 1));
				break;
			default:
				break;
		}

		setTotalPages(Math.ceil(result.length / itemsPerPage));

		result = result.slice((page - 1) * itemsPerPage, page * itemsPerPage);

		return result;
	}, [products.cartItems, searchTerm, itemType, game, price, sortBy, page]);

	return (
		<section id="products">
			<div id="filters">
				<CustomSelect icon={<Sword />} placeholder="Select a game" options={platformBadges} onChange={handleByGame} />
				<div id="search-bar">
					<SearchInput placeholder="Search" onChange={handleSearch} />
					<CustomSelect
						icon={<HandCoins />}
						iconColor="var(--accent-color)"
						placeholder="All"
						options={priceOptions}
						onChange={handlePrice}
						label="Price"
					/>
					<CustomSelect
						icon={<Feather />}
						iconColor="var(--accent-color)"
						placeholder="All"
						options={platformBadges}
						onChange={handleItemType}
						label="Item Type"
					/>
				</div>
			</div>
			<section id="products-container">
				<header id="products-header">
					<h4 className="product-title">
						Showing {filteredProducts.length} from {products.cartItems.length}
					</h4>
					<CustomSelect
						icon={<SlidersHorizontal />}
						iconColor="var(--accent-color)"
						placeholder="Featured"
						options={sortByOptions}
						onChange={handleSortBy}
						label="Sort By"
					/>
				</header>
				<section id="products-card">
					{filteredProducts.length > 0 &&
						filteredProducts.map((product, index) => (
							<ProductCard
								key={index}
								item={product}
								maxQuantity={product.quantity}
								onAddToCart={() => handleAddToCart(product)}
								onViewDetails={handleViewDetails}
							/>
						))}

					{filteredProducts.length === 0 && <p>No products found</p>}
				</section>
					{filteredProducts.length > 0 && totalPages > 1 && (
						<Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePage} />
					)}
			</section>
			<ProductDialog item={selectedProduct} isOpen={isOpenViewDetails} onClose={handleCloseViewDetails} />
		</section>
	);
};

export default Products;
