import { menuItems } from "../config/config";
import { Dropdown, DropdownContent, DropdownItem, DropdownMenu } from "./Dropdown";
import { ChevronDown} from "lucide-react";

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
