import { Dropdown, DropdownContent, DropdownItem, DropdownMenu } from "./Dropdown";
import { ChevronDown, Gamepad2, Crosshair, Box, Target } from "lucide-react";

interface MenuItem {
	id: string;
	label: string;
	icon?: React.ReactNode;
}

const menuItems: MenuItem[] = [
	{ id: "usd", label: "USD", icon: <Target className="h-4 w-4" /> },
	{ id: "cop", label: "COP", icon: <Crosshair className="h-4 w-4" /> },
	{ id: "eur", label: "EUR", icon: <Crosshair className="h-4 w-4" /> },
	{ id: "ves", label: "VES", icon: <Gamepad2 className="h-4 w-4" /> },
	{ id: "gbp", label: "GBP", icon: <Box className="h-4 w-4" /> },];

const CurrencyButton = () => {
	return (
		<Dropdown className="currency-button">
			<button className="rotate-icon">
				USD <ChevronDown className="header-icon" />
			</button>

			{/* Dropdown */}
			<DropdownMenu>
				<DropdownContent>
					{menuItems.map(item => (
						<DropdownItem key={item.id}>
							<span className="menu-icon">{item.icon}</span>
							{item.label}
						</DropdownItem>
					))}
				</DropdownContent>
			</DropdownMenu>
		</Dropdown>
	);
};

export default CurrencyButton;
