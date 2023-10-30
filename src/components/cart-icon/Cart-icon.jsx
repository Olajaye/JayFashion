import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.style.jsx"
import { CartContext } from "../context/cartdropdown.context"
import { useContext } from "react"

function CartIcon() {
  const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => {
    setisCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon