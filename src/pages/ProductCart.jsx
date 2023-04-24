import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { deleteProduct, getProducts } from '../redux/producReducer/action'
import { useDispatch } from 'react-redux'

const ProductCart = ({image,title,price,brand,discount,id, category,obj}) => {
const dispatch = useDispatch();
const handleDelete = () => {
 dispatch(deleteProduct(id))
  .then((res)=> {
    dispatch(getProducts(obj))
  })
}

  return (
    <DIV>
     <img src={image} alt={title} />
     <h3>Id : {id}</h3>
     <h3>Title : {title}</h3> 
     <h3>Price : ${price}</h3>
     <p>Brand : {brand}</p>
     <p>Discount : {discount}</p>
     <p>Category : {category}</p> 
     <button>
      <Link to={`/edit/${id}`}> Edit</Link>
     </button>
     <button onClick={handleDelete}>Delete</button>
    </DIV>
  )
}

export default ProductCart

const DIV = styled.div`
border:1px solid gray;
padding:10px;
width:300px;

img{
    width:100%;
    height:250px
}
`