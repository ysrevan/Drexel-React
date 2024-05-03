import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { useCart } from 'react-use-cart';
import { ProductContext } from '../context/ProductContext';
import slugify from 'slugify';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { totalItems } = useCart();
  const [product] = useContext(ProductContext);
  const [keyword, setKeyword] = useState();
  const [lang,setLang] = useContext(LangContext);
  const [theme,setTheme] = useContext(ThemeContext);
  return (
    <header>
      <div className='container'>
        <nav>
          <ul>
            <li><NavLink className="nav-link" to="/">{lang==="AZ"?"Ana Səhifə":"Home"}</NavLink></li>
            <li><NavLink className="nav-link" to="/shop">{lang==="AZ"?"Mağaza":"Shop"}</NavLink></li>
            <li><NavLink className="nav-link" to="/blog">{lang==="AZ"?"Bloq":"Blog"}</NavLink></li>
            <li><NavLink className="nav-link" to="/pages">{lang==="AZ"?"Səfihələr":"Pages"}</NavLink></li>
          </ul>
        </nav>


        <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/logo.png" alt="" />

        <div className="login">
          <Link id='header' to="/login">{lang==="AZ"?"QEYDİYYATDAN KEÇ":"LOGIN OR REGISTER"}</Link>
          <i class="fa-regular fa-heart"></i>
          <a href="#">CART</a>
          <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary search" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-magnifying-glass" /></button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search product</h1>

                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input onChange={e => setKeyword(e.target.value)} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                    <ul class="list-group">
                      {!keyword ? "" : product.filter(p => p.name.toLocaleLowerCase().includes(keyword)).map(item => (
                        <span data-bs-dismiss="modal">  <Link onClick={() => { }} to={`/shop/${slugify(item.name)}`} class="list-group-item "><img height={70} width={70} style={{ objectFit: "contain" }} src={item.image} alt="img" /><span>{item.name}</span></Link></span>
                      ))}
                      {keyword && product.filter(p => p.name.toLocaleLowerCase().includes(keyword)).length === 0 && (
                        <li className="list-group-item">Not found product</li>
                      )}
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>



          <Link to="/cart" style={{ position: "relative" }}>
            <BsCart2 />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          </Link>
          <button className='btn btn-dark ms-3' onClick={()=>{
            lang==="EN"?setLang("AZ"):setLang("EN")
            lang==="EN"?localStorage.setItem("lang","AZ"):localStorage.setItem("lang","EN")
            }}>{lang}</button>
            <button className='btn btn-dark ms-3' onClick={()=>{
              theme==="light"?setTheme("dark"):setTheme("light")
              theme==="light"?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")
            }}>{theme}</button>
        </div>
      </div>
    </header>
  )
}

export default Header