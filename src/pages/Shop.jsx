import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LeftCard from '../components/LeftCard'
import Product from '../components/Product'
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
  const [product] = useContext(ProductContext);
  const [filterData,setFilterData] = useState([]);
  const [active,setActive] = useState("")

  const filterProduct = (cat) =>{
    const result = product.filter(p => p.category === cat)
    setFilterData(result)
    setActive(cat)
  }

  return (
   
      <div className="container main">
     <LeftCard />
    <div className="row">
    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-categori.jpg" alt="" />

  <ul className="list-group mt-5">
  <li  onClick={()=>{filterProduct('pillow')}} className={`list-group-item ${active===('pillow')?"active":""}`}><a href="#">PILLOW</a></li>
  <li  onClick={()=>{filterProduct('broom')}} className={`list-group-item ${active===('broom')?"active":""}`}><a href="#">BROOM</a></li>
  <li  onClick={()=>{filterProduct('candle')}} className={`list-group-item ${active===('candle')?"active":""}`}><a href="#">CANDLE</a></li>
  <li  onClick={()=>{filterProduct('clock')}} className={`list-group-item ${active===('clock')?"active":""}`}><a href="#">CLOCK</a></li>
  <li  onClick={()=>{filterProduct('thing')}} className={`list-group-item ${active===('thing')?"active":""}`}><a href="#">THING</a></li>
</ul>

 {filterData.length === 0 ? product.map(item => (
                       <Product alldata={item} key={item.id}/>
                    )) : filterData.map(item => (
                      <Product alldata={item} key={item.id}/>))}

    </div>
     </div>
  )
}

export default Shop
