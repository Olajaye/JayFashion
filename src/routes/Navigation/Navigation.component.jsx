import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import "./navigation.style.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

function Navigation() {
  return (
    <Fragment >
      <div className='navigation'>
        <Link to="/" className='logo-container'>
          <CrownLogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className='nav-link'>
            Shop
          </Link>
          <Link to="/auth" className='nav-link'>
            Sign-In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation