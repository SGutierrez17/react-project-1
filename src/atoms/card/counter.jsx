import React from 'react'
import {useState} from 'react'

import "./styles.css"

export default function Counter() {
  const [count, setCount] = useState(0)
  
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    if (count >= 1) {
      setCount(prevCount => prevCount - 1)
    }
  }
  

  return (
    <div className='counter-box'> 
        <p>Counter <span>{count}</span></p>
        <button className='increment' onClick={increment}>Increment</button>
        <button className='decrement' onClick={decrement}>Decrement</button>
    </div>
    )
}
