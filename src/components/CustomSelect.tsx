import { useState } from "react";
import { Sword, ChevronDown } from "lucide-react";

interface Option {
	value: string;
	label: string;
}

interface CustomSelectProps {
	placeholder?: string;
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
}

export default function CustomSelect({ placeholder = "Select a game", options, value, onChange }: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value);

	const handleSelect = (value: string) => {
		setSelectedValue(value);
		onChange?.(value);
		setIsOpen(false);
	};

	const selectedOption = options.find(option => option.value === selectedValue);

	return (
		<div className="select-container">
			<button
				type="button"
				className="select-trigger"
				onClick={() => setIsOpen(!isOpen)}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<Sword className="select-icon" size={16} />
				<span className="select-value">{selectedOption ? selectedOption.label : placeholder}</span>
				<ChevronDown
					className="select-icon"
					size={18}
					style={{
						transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
						transition: "transform 0.2s ease",
					}}
				/>
			</button>

			{isOpen && <div className="select-overlay" onClick={() => setIsOpen(false)} />}

			<div className={`select-content ${isOpen ? "open" : ""}`} role="listbox">
				{options.map(option => (
					<button
						key={option.value}
						className="select-item"
						role="option"
						aria-selected={selectedValue === option.value}
						onClick={() => handleSelect(option.value)}
					>
						<Sword className="select-icon" size={16} />
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
}
