import React, { useContext } from 'react'
import Product1 from '../components/Product1'
import { BlogContext } from '../context/BlogContext'

const Blog = () => {
  const [blog] = useContext(BlogContext);
  return (
    <div className="container">
      <div className='row'>
        {blog.map(item => (
          <Product1 alldata={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Blog