import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (productName) => {
    const newItem = {
      id: Date.now() + Math.random(),
      name: productName
    }
    setCart((prevCart) => [...prevCart, newItem])
  }

  const removeFromCart = (idToRemove) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== idToRemove))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider