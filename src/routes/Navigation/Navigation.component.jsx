import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { NavigationContainer, NavLink, NavLinks, LogoConatiner } from './navigation.style'

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { UserContext } from '../../components/context/user.contex'
import { CartContext } from '../../components/context/cartdropdown.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/Cart-icon'
import Cartdropdown from '../../components/cart-dropdown/cart.dropdown'

function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
  }
  return (
    <Fragment >
      <NavigationContainer>

        <LogoConatiner to="/">
          <CrownLogo className='logo' />
        </LogoConatiner>

        <NavLinks>

          <NavLink to="/shop">
            SHOP
          </NavLink>

          {
            currentUser ? (
              <NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth">
                SIGN IN
              </NavLink>)
          }

          <CartIcon />
        </NavLinks>
        {isCartOpen && <Cartdropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation