import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './sass/style.scss'
import { ProductProvider } from './context/ProductContext.jsx'
import { BlogProvider } from './context/BlogContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
   <ProductProvider>
   <App />
   </ProductProvider>
   </BlogProvider>
  </React.StrictMode>,
)
