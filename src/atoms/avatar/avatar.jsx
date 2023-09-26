import React from 'react'

import "./avatar.css";

import myAvatar from "./myAvatar.svg"

export default function Avatar({description}) {
  return (    
    <div>
    <h3>{description}</h3>
    <img className="imageAvatar"src={myAvatar} alt="My Avatar" />
    </div>
  )
}