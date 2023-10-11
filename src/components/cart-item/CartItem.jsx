import React from 'react'
import "./cartitem.scss"

function CartItem({ cartitem }) {
  const { name, price, quantity, imageUrl } = cartitem
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem 