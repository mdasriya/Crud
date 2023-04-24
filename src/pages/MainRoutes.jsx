import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Admin from './Admin'
import PrivateRoutes from '../component/PrivateRoutes'
import EditPage from './EditPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/edit/:id' element={<EditPage />}/>
      <Route path='/admin' element={<PrivateRoutes><Admin /></PrivateRoutes>}/>
      <Route path='*' element={<h1>404 Page Not Found</h1> } />
    </Routes>
  )
}

export default MainRoutes
