import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import "./styles/index.css";
import "./styles/global.css";
import "./styles/dropdown.css";
import "./styles/cartButton.css";
import "./styles/header.css";
import "./styles/currencyButton.css";
import "./styles/sidebar.css";
import "./styles/products.css";
import "./styles/productDialog.css";
import "./styles/pagination.css";
import "./styles/customSelect.css";
import "./styles/searchInput.css";
import "./styles/footer.css";
import "./styles/widgets.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
