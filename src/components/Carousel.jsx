import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const Carousel = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className='container mt-5'>
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text">
        <h2>{lang==="AZ"?"DREXEL MEBEL":"DREXEL FURNITURE"}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, eos?</p>
        <button>{lang==="AZ"?"İNDİ BAXIN":"VIEW NOW"}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-3.jpg" className="d-block w-100" alt="..." />

      <div className="carousel-text1">
      <h2>{lang==="AZ"?"İŞIQLANDIRMA":"LIGHTING"}</h2>
      <p>{lang==="AZ"?"Norman Chenner tərəfindən 1958-ci ildə qəliblənmiş kontrplak kreslo":"The 1958 moulded plywood armchair by Norman Chenner"}</p>
      <button>{lang==="AZ"?"İNDİ BAXIN":"VIEW NOW"}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text">
        <h2>{lang==="AZ"?"CHERNER KRESLO":"CHERNER ARMCHAIR"}</h2>
        <p>{lang==="AZ"?"Norman Chenner tərəfindən 1958-ci ildə qəliblənmiş kontrplak kreslo":"The 1958 moulded plywood armchair by Norman Chenner"}</p>
        <button>{lang==="AZ"?"İNDİ BAXIN":"VIEW NOW"}</button>
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