import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';

const Footer = () => {
  const [lang] = useContext(LangContext);
  return (
 <footer className="py-5 mt-5">
  <div className="container">
  <div className="row">
    <div className="col-6 col-md-3 mb-3">
      <h5>{lang==="AZ"?"HAQQIMIZDA":"ABOUT"}</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Yenilər və hekayələr":"New & Stories"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Tarix":"History"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Bizim Studiya":"Our Studio"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Sərgi salonları":"Showrooms"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Stokçular":"Stockists"}</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>{lang==="AZ"?"MÜŞTƏRİ XİDMƏTLƏRİ":"CUSTOMER SERVICES"}</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Bizimlə əlaqə":"Contact us"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Ticarət xidmətləri":"Trade Services"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Giriş/Qeydiyyat":"Login/Register"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Çatdırılma və Qaytarma":"Delivery and Returns"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">F.A.Q's</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>{lang==="AZ"?"MEBEL":"FURNITURE"}</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Cədvəllər":"Tables"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Kreslolar":"Chairs"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Saxlama":"Storage"}</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>{lang==="AZ"?"AKSESUARLAR":"ACCESSORIES"}</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Şamlar və Ətir":"Candles & Fragrance"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Dəftərxana ləvazimatları":"Stationery"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Mətbəx & Yemək":"Kitchen & Dining"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Tekstil":"Textiles"}</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="AZ"?"Hədiyyə Dəstləri":"Gifl Sets"}</a></li>
      </ul>
    </div>
  
  </div>
   <nav className='container mt-5'>
    <ul>
        <li><a href="">{lang==="AZ"?"HAQQIMIZDA":"ABOUT US"}</a></li>
        <li><a href="">{lang==="AZ"?"BLOQ":"BLOG"}</a></li>
        <li><a href="">F.A.Q'S</a></li>
        <li><a href="">{lang==="AZ"?"SİFARİŞ İZLƏMƏSİ":"ORDER TRACKING"}</a></li>
        <li><a href="">{lang==="AZ"?"BİZİMLƏ ƏLAQƏ":"CONTACT US"}</a></li>
    </ul>

    <div className="icon">
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-google"></i>
    <i class="fa-brands fa-linkedin"></i>
    </div>
   </nav>
  </div>
</footer>

  )
}

export default Footer