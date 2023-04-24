import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getProducts } from '../redux/producReducer/action'

const NavBar = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
let ref = useRef();


const obj = {
params:{
  q: text && text
},
};


useEffect(()=> {
  if(ref.current){
   clearTimeout(ref.current)
  }
  ref.current= setTimeout(()=>{
     dispatch(getProducts(obj))
   },1000) 
 
},[text])

  return (
    <DIV>
     <h2>Shopping App</h2>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/admin"}>Admin</Link>
      <input type="text" placeholder='Search...' onChange={(e)=>setText(e.target.value)}/>
    </DIV>
  )
}

export default NavBar

const DIV = styled.div`
display:flex;
align-items:center;
border-bottom: 1px solid gray;
  gap: 20px;
`
