import React from 'react'
import '../../assets/css/Header.css'
import Cart from '../Cart'
const Header = (props) => {
  const handleClick = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="flex shopping-card">
      <div className="brand-name">
        Shopping Cart App
        <p>
          Logged as {localStorage.getItem('email').replace(/"/g, '')}{' '}
          <a type="button" onClick={handleClick}>
            Logout
          </a>
        </p>
      </div>
      <Cart />
    </div>
  )
}

export default Header
