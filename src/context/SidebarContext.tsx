import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir la interfaz para el contexto
interface SidebarContextType {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

// Crear el contexto con un valor por defecto
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Proveer el contexto a los componentes
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>;
};

// Hook para usar el contexto fácilmente
export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (context === undefined) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};
