import React, { useState } from 'react'

function CounterCompo() {
    const [count, setCount] = useState(0)
  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)} >Increment</button>
    </>
  )
}

export default CounterCompo
