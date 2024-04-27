import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import slugify from 'slugify'
import swal from 'sweetalert'
const Product = ({alldata}) => {
  const {addItem} = useCart();
  const addAlert =(id)=>{
    swal("Good job!", "You clicked the button!", "success");
  }
  return (
   <>
        <div className="col-12 col-sm-6 col-md-4 mt-5">
     <div className="card">
  <img src={alldata.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{alldata.name}</h5>
    <p className="card-text">${alldata.price}</p>
   <div className="details">
   <a href="#" className="btn btn-dark" onClick={()=> {addItem(alldata);addAlert(alldata.id)}}>Add to Cart</a>
    <Link to={`/shop/${slugify(alldata.name)}`}>View Details</Link>
   </div>
  </div>
</div>
 </div>
   </>
      
  )
}

export default Product
