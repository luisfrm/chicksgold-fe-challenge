import { X } from "lucide-react";
import React from "react";
import { useSidebar } from "../context/SidebarContext";

interface SidebarProps {
	children: React.ReactNode;
	trigger: React.ReactNode;
	className?: string;
}

interface SidebarDialogProps {
	children: React.ReactNode;
}

interface SidebarContentProps {
	children: React.ReactNode;
	className?: string;
}

export const Sidebar = ({ children, trigger, className = "" }: SidebarProps) => {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<>
			{trigger && (
				<div className={className}>
					<div className={className} onClick={() => setIsOpen(true)}>
						{trigger}
					</div>
					<div>
						{isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export const SidebarDialog = ({ children }: SidebarDialogProps) => {
	const { isOpen } = useSidebar();
	return <div className={`sidebar ${isOpen ? "open" : ""}`}>{children}</div>;
};

export const SidebarHeader = ({ children }: SidebarDialogProps) => {
	const { setIsOpen } = useSidebar();
	return (
		<div className="sidebar-header">
			{children}
			<button onClick={() => setIsOpen(false)} className="close-button">
				<X className="h-6 w-6" />
			</button>
		</div>
	);
};

export const SidebarTitle = ({ children }: SidebarDialogProps) => {
	return <div className="sidebar-title">{children}</div>;
};

export const SidebarContent = ({ children }: SidebarContentProps) => {
	return <>{children}</>;
};

export const SidebarFooter = ({ children }: SidebarDialogProps) => {
	return <div className="sidebar-footer">{children}</div>;
};
