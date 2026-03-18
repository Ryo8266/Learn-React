import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export default function CartDisplay() {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <div>
      <h3>Giỏ hàng</h3>
      <p>Cart:</p>

      {cart.length === 0 && <p>Giỏ hàng đang trống</p>}

      {cart.map((item) => (
        <div key={item.id}>
          - {item.name}{' '}
          <button onClick={() => removeFromCart(item.id)}>
            [Remove]
          </button>
        </div>
      ))}
    </div>
  )
}
