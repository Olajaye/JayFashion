import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart.dropdown.style.jsx"
import Button from '../button/Button-component'
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../context/cartdropdown.context";
import { useNavigate } from "react-router-dom";


function Cartdropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }


  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (<CartItem key={item.id} cartitem={item} />))) :
            (<EmptyMessage>Your cart is empty</EmptyMessage>)
        }

      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default Cartdropdown