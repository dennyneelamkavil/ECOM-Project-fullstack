import React, { useState } from 'react'
import MyLoginForm from '../components/MyLoginForm'
import SignupForm from '../components/SignupForm'

export default function LoginPage() {
    const [login, setLogin] = useState(true);
  return (
    <>
    {
        login ? <MyLoginForm/> : <SignupForm/>
    }
    </>
  )
}
