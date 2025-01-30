import { ChevronRight, Menu, UserRound } from "lucide-react";
import { SidebarProvider } from "../context/SidebarContext";
import { Sidebar, SidebarContent, SidebarDialog, SidebarHeader, SidebarTitle } from "./Sidebar";
import CustomSelect from "./CustomSelect";
import { headerItems, menuItemsMobile } from "../config/config";

export default function NavigationMobile() {
	return (
		<SidebarProvider>
			<Sidebar
				className="flex align-center h-100 xl:hidden flex"
				trigger={
					<button>
						<Menu className="header-icon" />
					</button>
				}
			>
				<SidebarDialog>
					<SidebarHeader>
						<SidebarTitle>
							<h2>Navigation</h2>
						</SidebarTitle>
					</SidebarHeader>
					<SidebarContent>
						<section id="header-content-mobile">
							<nav>
								<ul>
									{headerItems.map((item, index) => (
										<li key={index}>
											{item.label.toUpperCase()} <ChevronRight className="header-icon" />
										</li>
									))}
								</ul>
							</nav>
							<div className="header-cta">
								<CustomSelect options={menuItemsMobile} placeholder="USD" />
								<div className="flex align-center">
									<button className="button-primary">
										Sign In <UserRound className="header-signin" />
									</button>
								</div>
							</div>
						</section>
					</SidebarContent>
				</SidebarDialog>
			</Sidebar>
		</SidebarProvider>
	);
}
