import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify'
import { ProductContext } from '../context/ProductContext'

const ProductDetails = () => {
    const [product] = useContext(ProductContext)
    const {slug} = useParams();
    const productDetails = product.find(p=>slugify(p.name)===slug)
  return (
<div className="container">
<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src={productDetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={300} loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.name}</h1>
    <p className="lead">${productDetails.price}</p><div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/shop"><button className='back'>Back</button></Link>
      <button type="button" className="btn btn-dark btn-lg px-4">Add to Cart</button>
    </div>
  </div>
</div>
</div>

  )
}

export default ProductDetails