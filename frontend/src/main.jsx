import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './Context/FilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FilterProvider >
)
