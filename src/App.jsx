import React from 'react'
import CountProvider from './contexts/countContext'
import CountDisplay from './components/CountDisplay'
import HeaderDisplay from './components/HeaderDisplay'
import ProfileDisplay from './components/ProfileDisplay'
import UserProvider from './contexts/userInfor'
import ThemeProvider from './contexts/themeContext'
import ThemeDisplay from './components/ThemeDisplay'
import CartProvider from './contexts/cartContext'
import ProductList from './components/ProductList'
import CartDisplay from './components/CartDisplay'

export default function App() {

  return (
    // Bài 1
    // <CountProvider>
    //   <CountDisplay />
    // </CountProvider>

    // Bài 2
    // <UserProvider>
    //   <HeaderDisplay />
    //   <ProfileDisplay />
    // </UserProvider>

    // Bài 3
    // <ThemeProvider>
    //   <ThemeDisplay />
    // </ThemeProvider>

    // Bài 4
    <CartProvider>
      <ProductList />
      <CartDisplay />
    </CartProvider>
  )
}
