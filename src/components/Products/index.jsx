import React, { useContext } from 'react'
import { ProductsData } from '../../Data/Products'
import '../../assets/css/Products.css'
import { CartContext } from '../../context/CartContext'

const Products = () => {
  const { addItemToCart } = useContext(CartContext)
  return (
    <div className="productsContainer">
      {ProductsData.map((product, i) => {
        return (
          <div key={i} className={'product'}>
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            <button className="button" onClick={() => addItemToCart(product)}>
              Add to cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Products
