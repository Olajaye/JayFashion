import React, { useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../forminput/forminput.component'
import Button from '../button/Button-component'

import "./signup-form.style.scss"

const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

function Signup() {
  const [fromFeilds, setFormFeilds] = useState(defaultFormFeilds)
  const { displayName, email, password, confirmPassword } = fromFeilds



  //reset formfeild
  const resetFormFeild = () => {
    setFormFeilds(defaultFormFeilds)
  }
  // handling change of formfeild
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFeilds({ ...fromFeilds, [name]: value })
  }

  //handling submit of formfeild
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("password do not match")
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFeild()
    } catch (error) {
      console.log("user creation encountared an error", error)
    }

  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and passord</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />


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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>

      </form>
    </div>
  )
}

export default Signup