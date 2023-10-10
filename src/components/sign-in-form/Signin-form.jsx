import React from 'react'
import { useState } from 'react'
import Button from '../button/Button-component'
import FormInput from '../forminput/forminput.component'
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import "./signin-form.style.scss"

const defaultFormFeilds = {
  email: "",
  password: "",
}

function Signin() {
  const [fromFeilds, setFormFeilds] = useState(defaultFormFeilds)
  const { email, password } = fromFeilds



  //reset formfeilds
  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeilds)
  }

  //handling change for formfeilds
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...fromFeilds, [name]: value })
  }

  //handling submit singin email and pass word and creating or geting a data base from firestore
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signinAuthUserWithEmailAndPassword(
        email,
        password)
      resetFormFeild()
    } catch (error) {
      console.log("user creation encountared an error", error)
    }
  }

  // signing in with google email
  const signInWithGoogle = async () => {
    await signInWithGooglePopup()

  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and passord</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />


        <div className='containerbtn'>
          <Button buttonType="inverted" type='submit' >Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>Google signin</Button>
        </div>
      </form>
    </div >
  )
}

export default Signin