import React, { useState } from 'react'
import ProductList from './ProductList'
import SideBar from '../component/SideBar'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <DIV>
      <div className='sidebar' >
        <SideBar />
      </div>
      <div className='productlist' >
     <ProductList />
      </div>
    </DIV>
  )
}

export default HomePage

const DIV = styled.div`
 display:flex;
 gap:20px;
 .sidebar{

width:30%;
 }
 
`;
