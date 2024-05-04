import React, { useContext } from 'react'
import Product1 from '../components/Product1'
import { BlogContext } from '../context/BlogContext'
import { ThemeContext } from '../context/ThemeContext';

const Blog = () => {
  const [blog] = useContext(BlogContext);
  const [theme] = useContext(ThemeContext)
  return (
    <body className={`${theme === "dark" ? "dark":""}`}>
    <div className="container">
      <div className='row'>
        {blog.map(item => (
          <Product1 alldata={item} key={item.id} />
        ))}
      </div>
    </div>
    </body>
  )
}

export default Blog