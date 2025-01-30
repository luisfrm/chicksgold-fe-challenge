import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import CartWidget from "./CartWidget";

export default function Widgets() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 200);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="cart-widget">
			<button
				className={`scroll-top-button ${showScrollTop ? "visible" : ""}`}
				onClick={scrollToTop}
				aria-label="Scroll to top"
			>
				<ChevronUp size={24} />
			</button>
			<CartWidget /> 
		</div>
	);
}
