import React from 'react'

import "./avatar.css";



export default function Avatar({imageSrc, description}) {
  return (    
    <div>
    <h3>{description}</h3>
    <img className="imageAvatar"src={imageSrc} alt="My Avatar" />
    </div>
  )
}