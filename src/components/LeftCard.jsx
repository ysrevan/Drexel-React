import React from 'react'

const LeftCard = () => {
  return (
   <>
   
    <div className="leftcard">
        <a href="">Home/Shop/Accessories</a>
    <div className='mt-4'>
        <h5>PRODUCT CATEGORIES</h5>
        <nav>
            <ul>
                <li><a href="">Accessories</a></li>
                <li><a href="">Black Lamp</a></li>
                <li><a href="">Dandy Brush</a></li>
                <li><a href="">Furniture</a></li>
                <li><a href="">Light</a></li>
                <li><a href="">Uncategorized</a></li>
            </ul>
        </nav>
    </div>

    <div>
        <h5>FILTER BY SIZE</h5>
        <nav>
            <ul>
                <li><a href="">L</a></li>
                <li><a href="">M</a></li>
                <li><a href="">S</a></li>
                <li><a href="">XL</a></li>
            </ul>
        </nav>
    </div>

    <div>
        <h5>FILTER BY COLOR</h5>
        <nav>
            <ul>
                <li><a href="">BLUE</a></li>
                <li><a href="">GREEN</a></li>
                <li><a href="">WHITE</a></li>
               
            </ul>
        </nav>
    </div>

    <div className='product'>
        <h5>PRODUCTS</h5>
       <div>
        <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/07-2-370x459.jpg" alt="err" />
        <p className='mt-4 mx-3'>WATER REPELLENT PARKA<br></br>
        $3.00-$232.00</p>
       </div>

       <div className='mt-3'>
        <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/08-370x459.jpg" alt="" />
        <p className='mt-4 mx-3'>WATER REPELLENT PARKA<br></br>
        $200.00-$300.00</p>
       </div>

       <div className='mt-3'>
        <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/06-370x459.jpg" alt="" />
        <p className='mt-4 mx-3'>WATER REPELLENT PARKA<br></br>
        $270.00-$170.00</p>
       </div>
    </div>

    <div className='button'>
        <h5>PRODUCT TAGS</h5>
        <button>Acessories</button>
        <button>Blog</button>
        <button>Ecommerce</button><br></br>
        <button>Fashion</button>
        <button>Hot</button>
        <button>Men</button>
        <button>Popular</button><br></br>
        <button>Women</button>
        <button>Woo</button>
    </div>

    <div className='compare'>
        <h5>COMPARE</h5>
        <p>No products to compare</p>
        <button className='clear'>Clear all</button>
        <button className='compare'>Compare</button>
    </div>
 

  <img className='mt-5' src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-blog-310x340.jpg" alt="" />
    </div>
   </>
  )
}

export default LeftCard