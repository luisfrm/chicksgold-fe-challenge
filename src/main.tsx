import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/dropdown.css";
import "./styles/cartButton.css";
import "./styles/header.css";
import "./styles/currencyButton.css";
import "./styles/sidebar.css";

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
