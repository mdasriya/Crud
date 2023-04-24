import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from "./actionType"

 export const AddProduct = (data) => (dispatch) => {
 dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products", data)
    .then((res)=> {
        dispatch({type:ADD_PRODUCT_SUCCESS})
    })
    .catch((err)=> {
        dispatch({type:PRODUCT_FAILURE})
    })
 }

export  const getProducts = (params) => (dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",params)
    .then((res)=> {
        dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
    })
    .catch((err)=> {
        dispatch({type:PRODUCT_FAILURE})
    })
 }


 export const editData = (dataObj, id) => (dispatch) => {
  dispatch({type:PRODUCT_REQUEST})
 return  axios.patch(`http://localhost:8080/products/${id}`, dataObj) 
  .then((res)=> {
    dispatch({type:PATCH_PRODUCT_SUCCESS})
  }) 
  .catch((err)=> {
    dispatch({type:PRODUCT_FAILURE})
  })
 }

 export const deleteProduct = (id) =>(dispatch) => {
    dispatch({type:PRODUCT_REQUEST})
    return  axios.delete(`http://localhost:8080/products/${id}`) 
     .then((res)=> {
       dispatch({type:DELETE_PRODUCT_SUCCESS})
     }) 
     .catch((err)=> {
       dispatch({type:PRODUCT_FAILURE})
     })
 }