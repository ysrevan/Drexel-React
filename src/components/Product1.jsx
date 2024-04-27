import React from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Product1 = ({ alldata }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img src={alldata.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{alldata.name}</h5>
          <p className="card-text">{alldata.text}</p>
          <Link to={`/blog/${slugify(alldata.name)}`}>View Details</Link>
        </div>
      </div>

    </div>
  )
}

export default Product1