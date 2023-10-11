import "./cart.dropdown.scss"
import Button from '../button/Button-component'
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../context/cartdropdown.context";
function Cartdropdown() {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} cartitem={item} />)}
      </div>
      <Button>Go TO CHECKOUT</Button>
    </div>
  )
}

export default Cartdropdown