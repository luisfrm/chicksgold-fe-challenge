import { useEffect } from "react";
import { CartItem } from "../config/types";

interface ProductDialogProps {
	item?: CartItem;
	isOpen: boolean;
	onClose: () => void;
}

export default function ProductDialog({ item, isOpen, onClose }: ProductDialogProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="dialog-overlay" onClick={onClose}>
			<div className="dialog" onClick={e => e.stopPropagation()}>
				{item && (
					<>
						<div className="dialog-header">
							<div className="status-row">
								{item.onSale && (
									<div className="sale-badge">
										<span className="sale-dot" />
										ON SALE
									</div>
								)}
								{item.inStock && <span className="stock-badge">In stock</span>}
							</div>

							<img src={item.imageUrl || "/placeholder.svg"} alt={item.name} className="product-image" />

							<h3 className="product-title">{item.name}</h3>

							<div className="price-container">
								<span className="current-price">${item.price.toFixed(2)}</span>
								{item.onSale && <span className="original-price">${item.originalPrice.toFixed(2)}</span>}
							</div>

							<p className="product-description">{item.description}</p>

							<span className="platform-badge">{item.platformBadge}</span>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
