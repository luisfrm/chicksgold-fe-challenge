import { ChevronDown, UserRound } from "lucide-react";
import { headerItems } from "../config/config";

import Logo from "../assets/Logo";
import CurrencyButton from "./CurrencyButton";
import CartSidebar from "./CartSidebar";
import NavigationMobile from "./NavigationMobile";

const Header = () => {
	return (
		<header id="header">
			<div id="logo">
				<Logo />
			</div>
			<NavigationMobile />
			<section id="header-content-desktop">
				<nav>
					<ul>
						{headerItems.map((item, index) => (
							<li key={index} className="rotate-icon">
								{item.label.toUpperCase()} <ChevronDown className="header-icon" />
							</li>
						))}
					</ul>
				</nav>
				<div className="header-cta">
					<CurrencyButton />
					<CartSidebar />
					<div className="flex align-center">
						<button className="button-primary">
							Sign In <UserRound className="header-signin" />
						</button>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Header;
