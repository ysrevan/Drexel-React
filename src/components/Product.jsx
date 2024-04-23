import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
const Product = ({alldata}) => {
  return (
   <>
        <div className="col-12 col-sm-6 col-md-4 mt-5">
     <div className="card">
  <img src={alldata.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{alldata.name}</h5>
    <p className="card-text">${alldata.price}</p>
   <div className="details">
   <a href="#" className="btn btn-dark">Add to Cart</a>
    <Link to={`/shop/${slugify(alldata.name)}`}>View Details</Link>
   </div>
  </div>
</div>
 </div>
   </>
      
  )
}

export default Product
