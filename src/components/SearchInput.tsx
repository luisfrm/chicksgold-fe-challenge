import { Search } from "lucide-react";

interface SearchInputProps {
	placeholder?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export default function SearchInput({ placeholder = "Search", value, onChange }: SearchInputProps) {
	return (
		<div className="search-container">
			<Search className="search-icon" size={16} />
			<input
				type="text"
				className="search-input"
				placeholder={placeholder}
				value={value}
				onChange={e => onChange?.(e.target.value)}
			/>
		</div>
	);
}
