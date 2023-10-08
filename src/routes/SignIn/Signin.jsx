import React from 'react'
import Signup from '../../components/signUp-form/Signup'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'


function Signin() {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }



  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>sign in with googlePopup</button>

      <Signup />

    </div>
  )
}

export default Signin