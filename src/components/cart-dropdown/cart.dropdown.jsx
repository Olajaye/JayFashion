import "./cart.dropdown.scss"
import Button from '../button/Button-component'

function Cartdropdown() {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items" />
      <Button>Go TO CHECKOUT</Button>
    </div>
  )
}

export default Cartdropdown