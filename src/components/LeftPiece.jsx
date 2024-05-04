import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const LeftPiece = () => {
  const [lang] = useContext(LangContext);
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`mt-5 ${theme === "dark" ? "dark":""}`}>
        <h6>{lang==="AZ"?"Əlaqə məlumatları":"Contact Details"}</h6>
        <p>{lang==="AZ"?"İstəsəniz əgər ofisimizə yaxınlaşıb və ya yazılan nömrələrlə əlaqə saxlayıb bizimlə əlaqə qura bilərsiniz. İstəsəniz email ünvanımızada yaza bilərsiniz ki, biz sizə kömək edək. İş saatlarımız isə aşağıda qeyd olunub":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.Minus, dolorem repellat possimus velit provident ipsum obcaecati vero nesciunt esse iusto repudiandae, mollitia, modi dignissimos aliquid! Voluptatibus quas corporis sed quisquam."}</p>
           <h6>{lang==="AZ"?"OFİS ÜNVANI":"OFFICE ADDRESS"}</h6>
           <p>Maecenas quis nulla ullamcorper</p>
           <h6>EMAIL</h6>
           <p>lion-themes@gmail.com</p>
           <h6>{lang==="AZ"?"TELEFON NÖMRƏSİ":"PHONE NUMBER"}</h6>
           <p>025 1234 5678 – 025 1234 5779</p>
           <h6>{lang==="AZ"?"İŞ SAATLARI":"TIME HOURS"}</h6>
           <p>{lang==="AZ"?"Bazar ertəsindək Cümə gününə dək: 10 dan 7ə kimi ":"Monday to Friday: 10am to 7pm"}<br></br>
            {lang==="AZ"?"Şənbə: 10 dan 4 ə kimi":"Saturday: 10am to 4pm"}<br></br>
            {lang==="AZ"?"Bazar: 12 dən 4 ə kimi":"Sunday: 12am to 4pm"}</p>
    </div>
  )
}

export default LeftPiece