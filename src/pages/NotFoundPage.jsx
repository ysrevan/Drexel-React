import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Link to="/" className='d-flex align-items-center justify-content-center'>
        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xtbzaB2Elv3AQx4GkV4oA.gif" alt="" />
    </Link>
  )
}

export default NotFoundPage