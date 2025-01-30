"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
	value: string;
	label: string;
}

interface CustomSelectProps {
	label?: string;
	placeholder?: string;
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
	icon?: React.ReactNode;
	iconColor?: string;
}

export default function CustomSelect({
	label,
	placeholder = "Select option",
	options,
	value,
	onChange,
	icon,
	iconColor,
}: CustomSelectProps) {
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
				{icon && (
					<span className="select-icon" style={{ color: iconColor }}>
						{icon}
					</span>
				)}
				<div className="select-label-container">
					{label && <label className="select-label">{label}</label>}
					<span className="select-value">{selectedOption ? selectedOption.label : placeholder}</span>
				</div>
				<ChevronDown
					className="select-chevron"
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
						className="select-item rotate-icon"
						role="option"
						aria-selected={selectedValue === option.value}
						onClick={() => handleSelect(option.value)}
					>
						{icon && (
							<span className="select-icon" style={{ color: iconColor }}>
								{icon}
							</span>
						)}
						{option.label}
					</button>
				))}
			</div>
		</div>
	);
}
