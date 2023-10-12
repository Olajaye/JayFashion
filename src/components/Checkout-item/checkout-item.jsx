import React from 'react'
import "./checkout-item.scss"
import { useContext } from 'react'
import { CartContext } from '../context/cartdropdown.context'

function CheckOutItem({ cartItem }) {
  const { name, quantity, price, imageUrl } = cartItem

  const { clearItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)

  const clearItemHandler = () => clearItemToCart(cartItem)

  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)
  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={addItemHandler}>
          +
        </div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={removeItemHandler}>
          -
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>X</div>

    </div>
  )
}

export default CheckOutItem