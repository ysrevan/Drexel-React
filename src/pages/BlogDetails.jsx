import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import slugify from 'slugify'
import {BlogContext} from '../context/BlogContext'

const BlogDetails = () => {
    const [blog] = useContext(BlogContext)
    const {slug} = useParams()
    const blogDetails = blog.find(b=>slugify(b.name)===slug)
  return (
     <div className="container">
            <div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img src={blogDetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={500} loading="lazy" />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{blogDetails.name}</h1>
    <p className="lead">{blogDetails.text}</p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/blog"><button className='back'>Back</button></Link>
    </div>
  </div>
</div>

    </div>
     </div>
  )
}

export default BlogDetails