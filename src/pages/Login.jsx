import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/authReducer/action'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
const dispatch = useDispatch()
const location = useLocation()
const {isAuth} = useSelector((store)=> store.authReducer)
const navigate = useNavigate()
const handleSubmit = () => {
    let user = {
        email, password
    }
   dispatch(userLogin(user))
   .then((res)=> {
    navigate(location.state, {replace:true})
   })
    setEmail("")
    setPassword("")
}


  return (
    <DIV isAuth={isAuth}>
        <h2>User Login </h2>
        <h3>{isAuth? "Login Success!!!":"Continue To Login!!!"} </h3>
      <input type="text" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/><br /><br />
      <input type="text" placeholder='Passowrd' value={password} onChange={(e)=> setPassword(e.target.value)}/><br /><br />
      <button onClick={handleSubmit}>Log In</button>
    </DIV>
  )
}

export default Login;

const DIV = styled.div`
h3{
    color: ${({isAuth})=> isAuth? "green":"red"}
}
`
