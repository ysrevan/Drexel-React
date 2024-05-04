import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LangContext } from "../context/LangContext";


const LeftCard = () => {
    const [lang] = useContext(LangContext);
  return (
   <>
   <div className="leftcard">
        <Link to="/">{lang==="AZ"?"Ana səhifə/Mağaza/Aksesuarlar":"Home/Shop/Accessories"}</Link>
    <div className='mt-4'>
        <h5>{lang==="AZ"?"MƏHSUL KATEQORİYALARI":"PRODUCT CATEGORIES"}</h5>
        <nav>
            <ul>
                <li><a href="">{lang==="AZ"?"Aksesuarlar(17)":"Accessories(17)"}</a></li>
                <li><a href="">{lang==="AZ"?"Qara Lampa":"Black Lamp(3)"}</a></li>
                <li><a href="">{lang==="AZ"?"Dandy Fırçası(1)":"Dandy Brush(1)"}</a></li>
                <li><a href="">{lang==="AZ"?"Mebel(0)":"Furniture(0)"}</a></li>
                <li><a href="">{lang==="AZ"?"İşıq(5)":"Light(5)"}</a></li>
                <li><a href="">{lang==="AZ"?"Kateqoriyasız(2)":"Uncategorized(2)"}</a></li>
            </ul>
        </nav>
    </div>

    <div>
        <h5>{lang==="AZ"?"ÖLÇÜSÜNƏ GÖRƏ FİLTİR":"FILTER BY SIZE"}</h5>
        <nav>
            <ul>
                <li><a href="">L(3)</a></li>
                <li><a href="">M(3)</a></li>
                <li><a href="">S(3)</a></li>
                <li><a href="">XL(3)</a></li>
            </ul>
        </nav>
    </div>

    <div>
        <h5>{lang==="AZ"?"RƏNGİNƏ GÖRƏ FİLTİR":"FILTER BY COLOR"}</h5>
        <nav>
            <ul>
                <li><a href="">{lang==="AZ"?"GÖY(3)":"BLUE(3)"}</a></li>
                <li><a href="">{lang==="AZ"?"YAŞIL(3)":"GREEN(3)"}</a></li>
                <li><a href="">{lang==="AZ"?"AĞ(3)":"WHITE(3)"}</a></li>
               
            </ul>
        </nav>
    </div>

    <div className='product'>
        <h5>{lang==="AZ"?"MƏHSULLAR":"PRODUCTS"}</h5>
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
        <button>{lang==="AZ"?"Aksesuarlar":"Accessories"}</button>
        <button>{lang==="AZ"?"Bloq":"Blog"}</button>
        <button>{lang==="AZ"?"Elektron ticarət":"Ecommerce"}</button><br></br>
        <button>{lang==="AZ"?"Moda":"Fashion"}</button>
        <button>{lang==="AZ"?"İsti":"Hot"}</button>
        <button>{lang==="AZ"?"Kişi":"Men"}</button>
        <button>{lang==="AZ"?"Məhşur":"Popular"}</button><br></br>
        <button>{lang==="AZ"?"Qadın":"Women"}</button>
        <button>Woo</button>
    </div>

    <div className='compare'>
        <h5>{lang==="AZ"?"MÜQAYISƏ EDİN":"COMPARE"}</h5>
        <p>{lang==="AZ"?"Müqayisə üçün məhsul yoxdur":"No products to compare"}</p>
        <button className='clear'>{lang==="AZ"?"Hamısını sil":"Clear all"}</button>
        <button className='compare'>{lang==="AZ"?"Müqayisə et":"Compare"}</button>
    </div>
 

  <img className='mt-5' src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-blog-310x340.jpg" alt="" />
    </div>
   </>
  )
}

export default LeftCard