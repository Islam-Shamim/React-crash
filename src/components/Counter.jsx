import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
  return (
    <div>
        <h2>Counter : {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}
