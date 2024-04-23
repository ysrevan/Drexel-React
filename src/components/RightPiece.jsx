import React from 'react'

const RightPiece = () => {
  return (
    <div className='mt-5'>
        <h6>Leave A Comments</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
             Minima distinctio veniam temporibus ratione! <br></br>
             Cum vitae ab placeat maxime ad cupiditate eligendi <br></br>
             doloremque accusamus vel voluptate dolore sed adipisci, et quasi.</p>
            <p>Your Name (required)</p>
            <form>
                <input type="text" />
            </form>
            <p>Your Email (required)</p>
            <form>
                <input type="text" />
            </form>
            <p>Subject</p>
            <form>
                <input type="text" />
            </form>
            <p>Your Message</p>
            <textarea className='mt-3' name="" id="" cols="40" rows="10"></textarea><br></br>
            <button className='btn btn-dark'>SEND</button>
    </div>
  )
}

export default RightPiece