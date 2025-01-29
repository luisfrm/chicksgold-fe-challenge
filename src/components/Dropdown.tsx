interface DropdownProps {
	children: React.ReactNode;
	className?: string;
}

interface DropdownContentProps {
	children: React.ReactNode;
}

export const Dropdown = ({ children, className = "" }: DropdownProps) => {
	return <div className={`dropdown-container ${className}`}>{children}</div>;
};

export const DropdownMenu = ({ children }: DropdownContentProps) => {
	return (
		<div className="dropdown-menu" role="menu" aria-orientation="vertical">
			{children}
		</div>
	);
};

export const DropdownContent = ({ children }: DropdownContentProps) => {
  return <div className="dropdown-content" role="none">{children}</div>;
};

export const DropdownItem = ({ children }: DropdownContentProps) => {
  return <a href="#" className="dropdown-item" role="menuitem">{children}</a>;
};