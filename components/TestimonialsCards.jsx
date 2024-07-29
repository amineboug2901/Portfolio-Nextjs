import React from 'react'
import { FaStar } from "react-icons/fa6";
import './TestimonialsCards.css'

function TestimonialsCards({ratingStart,desc,username,date}) {
  return (
    <div className='card-cont'>
        <div className="rating">
            <p><b><FaStar /> {ratingStart}/5</b></p>
        </div>
        <div className="card-description">
            <p>{desc}</p>
        </div>
        <div className="card-username">
            <p className='name'><b>{username}</b></p>
        </div>
        <div className="card-username">
            <p className='date'>{date}</p>
        </div>
    </div>
  )
}

export default TestimonialsCards