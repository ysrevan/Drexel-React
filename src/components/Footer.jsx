import React from 'react'

const Footer = () => {
  return (
 <footer className="py-5 mt-5">
  <div className="container">
  <div className="row">
    <div className="col-6 col-md-3 mb-3">
      <h5>ABOUT</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">News & Stories</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">History</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Studio</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Showrooms</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stockists</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>CUSTOMER SERVICES</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Trade Services</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Login/Register</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Delivery and Returns</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">F.A.Q's</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>FURNITURE</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tables</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Chairs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Storage</a></li>
      </ul>
    </div>
    <div className="col-6 col-md-3 mb-3">
      <h5>ACCESSORIES</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Candles & Fragrance</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stationery</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Kitchen & Dining</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Textiles</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gifl Sets</a></li>
      </ul>
    </div>
  
  </div>
   <nav className='container mt-5'>
    <ul>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">BLOG</a></li>
        <li><a href="">F.A.Q'S</a></li>
        <li><a href="">ORDER TRACKING</a></li>
        <li><a href="">CONTACT US</a></li>
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