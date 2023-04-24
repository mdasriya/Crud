import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editData } from '../redux/producReducer/action'

const EditPage = () => {
  const {id} = useParams()
  const [data, setData] = useState("")
  const [success, setSuccess] = useState(false)
const dispatch = useDispatch()
const product = useSelector((store)=> store.productReducer.products)

const handleChange = (e) => {
  const {name, value} = e.target
  setData((prev)=> {
    return {...prev, [name]:value}
  })
}
const handleEdit = (e) => {
  e.preventDefault()
  dispatch(editData(data,id))
  .then(()=> {
  setSuccess(true)
  })
   
  setTimeout(()=> {
   setSuccess(false)
  }, 3000)
}

useEffect(()=> {
const data = product.find((el)=> el.id === +id)
setData(data)
},[])

  return (
    <div>
    <h2>Edit Products : {id}</h2>
    <h3>{success && "Edited Success!!!"}</h3>
    <form onSubmit={handleEdit}>
      <input type="text" name='image' onChange={handleChange} value={data.image}/><br />
      <input type="text" name='title' onChange={handleChange} value={data.title}/><br />
      <input type="text" name='price' onChange={handleChange} value={data.price}/><br />
      <input type="text" name='brand' onChange={handleChange} value={data.brand}/><br />
      <input type="text" name='discount' onChange={handleChange} value={data.discount}/><br />
      <select name="category" onChange={handleChange} value={data.category}> 
    <option value="">Select</option>
    <option value="men">Men</option>
    <option value="women">Women</option>
    <option value="kids">Kids</option>
   </select><br />
   <button type='submit'>SUBMIT</button>
    </form>
    </div>
  )
}

export default EditPage
