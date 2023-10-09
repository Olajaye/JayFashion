

import React from 'react'
import Signup from '../../components/signUp-form/Signup'
import Signin from '../../components/sign-in-form/Signin-form'
import "./authentication.style.scss"



function Authentication() {

  return (
    <div className='authentication-container'>

      <Signin />
      <Signup />
    </div>
  )
}

export default Authentication

