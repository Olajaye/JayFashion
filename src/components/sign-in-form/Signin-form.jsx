import React from 'react'
import { useState } from 'react'
import FormInput from '../forminput/forminput.component'
import "./signin-form.style.scss"
import Button from '../button/Button-component'
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'

const defaultFormFeilds = {
  email: "",
  password: "",
}

function Signin() {
  const [fromFeilds, setFormFeilds] = useState(defaultFormFeilds)

  const { email, password } = fromFeilds

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeilds)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...fromFeilds, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signinAuthUserWithEmailAndPassword(email, password)
      resetFormFeild()
    } catch (error) {
      console.log("user creation encountared an error", error)
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
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