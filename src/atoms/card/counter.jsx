import React from 'react'
import {useState} from 'react'

import "./styles.css"

export default function Counter() {
  const [count, setCount] = useState(0)
  
  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }

  function increment() {
    setCount(count + 1)
  }

  // function decrement() {
  //   if (count > 0) {
  //     setCount(prevCount => prevCount - 1)
  //   }
  // }

  function decrement() {
    if (count > 0){
    setCount(count - 1)
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
