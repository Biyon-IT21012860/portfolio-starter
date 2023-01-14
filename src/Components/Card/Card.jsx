import React from 'react'
import './Card.css'

const Card=({emoji,heading,detail})=> {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span><b>{heading}</b></span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card