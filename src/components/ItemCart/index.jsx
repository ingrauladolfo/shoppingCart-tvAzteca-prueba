import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import '../../assets/css/ItemCart.css'

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext)
  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addItemToCart(item)}>+</button>
            <button onClick={() => deleteItemToCart(item)}>-</button>
          </div>
        </div>
        <div className='right'>
          <div>
            {item.amount}
            <p>Total: ${item.amount * item.price} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCart
