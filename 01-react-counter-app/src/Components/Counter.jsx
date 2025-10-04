import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <div>
            <h1 className='number'> Count : {count} </h1>
        </div>
        <div className='btns-container'>
        <button className='increment' onClick={()=> setCount(count + 1)}>+</button>
        <button className='increment' onClick={()=> setCount(count - 1)}>-</button>
        </div>
    </div>
  )
}

export default Counter
