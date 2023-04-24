import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddProduct } from '../redux/producReducer/action'

const initState = {
    image:"",
    title:"",
    price:"",
    brand:"",
    discount:"",
    gender:"",
}

const Admin = () => {
    const [products, setProducts] = useState(initState)
const dispatch = useDispatch()
const handleChange = (e) => {
    const {name,value} = e.target
    setProducts((prev)=> {
        return {...prev, [name]:value}
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddProduct(products))
    setProducts(initState)
}

    return (
    <div>
        <form onSubmit={handleSubmit}> 
   <input type="text" placeholder='image' value={products.image} name='image' onChange={(e)=>handleChange(e)}/><br />
   <input type="text" placeholder='title' value={products.title} name='title' onChange={(e)=>handleChange(e)}/> <br />
   <input type="number" placeholder='price' value={products.price} name='price' onChange={(e)=>handleChange(e)}/> <br />
   <input type="text" placeholder='brand' value={products.brand} name='brand' onChange={(e)=>handleChange(e)}/> <br />
   <input type="number" placeholder='discount' value={products.discount} name='discount' onChange={(e)=>handleChange(e)}/> <br />
   <select name="gender" value={products.gender} onChange={(e)=>handleChange(e)}> 
    <option value="">Select</option>
    <option value="men">Men</option>
    <option value="women">Women</option>
    <option value="kids">Kids</option>
   </select><br />
   <button type='submit'>ADD</button>
        </form>
    </div>
  )
}

export default Admin
