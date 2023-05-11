import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

import LoginComponents from '../components/Login Page/LoginComponents'
const LoginPage = () => {
  let { loginUser } = useContext(AuthContext)

  return <LoginComponents onSubmit={loginUser} />
}

export default LoginPage
