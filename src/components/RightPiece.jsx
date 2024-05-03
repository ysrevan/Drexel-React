import React, { useContext } from 'react'
import { LangContext } from "../context/LangContext";


const RightPiece = () => {
  const [lang] = useContext(LangContext);
  return (
    <div className='mt-5'>
        <h6>{lang==="AZ"?"Şərh yazın":"Leave A Comments"}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
             Minima distinctio veniam temporibus ratione! <br></br>
             Cum vitae ab placeat maxime ad cupiditate eligendi <br></br>
             doloremque accusamus vel voluptate dolore sed adipisci, et quasi.</p>
            <p>{lang==="AZ"?"Adınız (tələb olunur)":"Your Name (required)"}</p>
            <form>
                <input type="text" />
            </form>
            <p>{lang==="AZ"?"Emailiniz (tələb olunur)":"Your Email (required)"}</p>
            <form>
                <input type="text" />
            </form>
            <p>{lang==="AZ"?"Mövzu":"Subject"}</p>
            <form>
                <input type="text" />
            </form>
            <p>{lang==="AZ"?"Sənin mesajın":"Your Message"}</p>
            <textarea className='mt-3' name="" id="" cols="40" rows="10"></textarea><br></br>
            <button className='btn btn-dark'>{lang==="AZ"?"GÖNDƏR":"SEND"}</button>
    </div>
  )
}

export default RightPiece