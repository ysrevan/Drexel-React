import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { useCart } from 'react-use-cart';

const Header = () => {
  const {totalItems} = useCart();
  return (
      <header>
          <div className='container'>
               <nav>
                <ul>
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
                    <li><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="nav-link" to="/pages">Pages</NavLink></li>
                </ul>
               </nav>
           

           <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/logo.png" alt="" />

           <div className="login">
            <a href="#">LOGIN OR REGISTER</a>
            <i class="fa-regular fa-heart"></i>
            <a href="#">CART</a>
            <i class="fa-solid fa-magnifying-glass"></i>
            <Link to="/cart" style={{position:"relative"}}>
        <BsCart2 />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
           </Link>
           </div>
        </div>
      </header>
  )
}

export default Header