import React, { useContext } from 'react'
import LeftPiece from './LeftPiece'
import RightPiece from './RightPiece'
import { LangContext } from "../context/LangContext";
import { Link } from 'react-router-dom';


const Contact = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className='container'>
        <Link to="/">{lang==="AZ"?"Ana səhifə/Bizimlə Əlaqə":"Home/Contact Us"}</Link>
        <h5>{lang==="AZ"?"Bizimlə Əlaqə":"Contact Us"}</h5>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24213.876580033484!2d-112.035536!3d40.657781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528d869d1ee20d%3A0x335b2f731059605a!2sUtah%20First%20Credit%20Union%20Amphitheatre!5e0!3m2!1sen!2sus!4v1713679456597!5m2!1sen!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  <div className="piece">
  <LeftPiece />
<RightPiece />
  </div>
    </div>
  )
}

export default Contact