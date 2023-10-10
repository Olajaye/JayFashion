import "./cart-icon.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../context/cartdropdown.context"
import { useContext } from "react"

function CartIcon() {
  const { isCartOpen, setisCartOpen } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setisCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon