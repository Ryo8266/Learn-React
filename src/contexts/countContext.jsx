import { createContext, useState } from "react"

export const CountContext = createContext()

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => setCount(count + 1)
  const handleDecrease = () => setCount(count - 1)

  const storeData = { count, handleIncrease, handleDecrease }

  return (
    <CountContext.Provider value={storeData}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider