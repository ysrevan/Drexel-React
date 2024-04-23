import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LeftCard from '../components/LeftCard'
import Product from '../components/Product'
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
  const [product] = useContext(ProductContext);
  const [category,setCategory] = useState([]);
  const [filterData,setFilterData] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5501/src/data/category.json')
    .then(res=>setCategory(res.data))
  },[]) 

  const filterProduct =(cat)=>{
    const result = product.filter(p=>p.category === cat)
    setFilterData(result);
  }

  return (
   
      <div className="container main">
     <LeftCard />
    <div className="row">
    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-categori.jpg" alt="" />
   
  
      <div className="col-12 col-sm-6 col-md-4">
      <ul className="list-group mt-5">
   {category.map(item=>(
     <li key={item.id} className="list-group-item" onClick={()=>{filterProduct(item.category)}}>{item.category}</li>
    ))}
  </ul>
      </div>


  
   
    {filterData.length===0?product.map(item=>(
         <Product alldata={item} key={item.id}/>
     )):filterData.map(item=>(
      <Product alldata={item} key={item.id}/>
  ))}
    </div>
     </div>
   
   
  )
}

export default Shop
