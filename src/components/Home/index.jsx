import React from 'react'
import '../../assets/css/Home.css'
import Cart from '../Cart'
import Header from '../Header/index'
import Products from '../Products/index'
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Products />
    </div>
  )
}

export default Home
