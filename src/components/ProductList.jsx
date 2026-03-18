import React, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export default function ProductList() {
  const { addToCart } = useContext(CartContext)

  const products = ['Laptop', 'Phone', 'Tablet'];

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>
      {products.map((item) => (
        <div key={item}>
          <span>{item}</span>
          <button onClick={() => addToCart(item)}>
            [Add]
          </button>
        </div>
      ))}
    </div>
  )
}
