import React from 'react'

const Carousel = () => {
  return (
    <div className='container mt-5'>
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text">
        <h2>DREXEL FURNITURE</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, eos?</p>
        <button>VIEW NOW</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-3.jpg" className="d-block w-100" alt="..." />

      <div className="carousel-text1">
      <h2>LIGHTING</h2>
      <p>The 1958 moulded plywood armchair by Norman Chenner</p>
      <button>VIEW NOW</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text">
        <h2>CHERNER ARMCHAIR</h2>
        <p>The 1958 moulded plywood armchair by Norman Chenner</p>
        <button>VIEW NOW</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Carousel