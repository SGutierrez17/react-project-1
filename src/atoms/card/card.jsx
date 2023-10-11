import React from 'react'

import "./card.css"

export default function Card({title,content,children}) {
  return (
    <div>
        <h2 className="titleCard">{title}</h2>
        <p className="contentCard">{content}</p>
        {children}
    </div>
  )
}

