import { ChevronDown, UserRound } from "lucide-react";
import { HeaderItems } from "../config/config";

import Logo from "../assets/Logo";
import CurrencyButton from "./CurrencyButton";
import CartSidebar from "./CartSidebar";

const Header = () => {
	return (
		<header id="header">
			<div id="logo">
				<Logo />
			</div>
			<nav>
				<ul>
					{HeaderItems.map((item, index) => (
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
		</header>
	);
};

export default Header;
