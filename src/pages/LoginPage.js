import React, {useContext, useEffect} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
      <form onSubmit={loginUser}>
        <input type='text' name='username' placeholder='Enter Username' />
        <input type='password' name='password' placeholder='Enter password' />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default LoginPage
