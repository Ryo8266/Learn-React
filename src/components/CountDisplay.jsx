import React, { useContext } from 'react'
import { CountContext } from '../contexts/countContext'

export default function CountDisplay() {
  const { count, handleIncrease, handleDecrease } = useContext(CountContext)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>[ + ]</button>
      <button onClick={handleDecrease}>[ - ]</button>
    </div>
  )
}
