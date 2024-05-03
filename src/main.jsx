import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './sass/style.scss'
import { ProductProvider } from './context/ProductContext.jsx'
import { BlogProvider } from './context/BlogContext.jsx';
import { CartProvider } from 'react-use-cart';
import { LangProvider } from './context/LangContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <LangProvider>
    <BlogProvider>
   <ProductProvider>
    <CartProvider>
   <App />
   </CartProvider>
   </ProductProvider>
   </BlogProvider>
    </LangProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
