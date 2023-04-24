import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/producReducer/action';
import ProductCart from './ProductCart';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const ProductList = () => {
const [search, setSearch] = useSearchParams()
const location = useLocation()
    const {products} = useSelector(store=> store.productReducer)
const dispatch = useDispatch();



let obj  = {
  params: {
    category:search.getAll("category"),
    _sort:search.get("order") && "price",
    _order:search.get("order"),
    _page:search.get("page"),
    _limit:5 ,
  }
}

    useEffect(()=> {
 dispatch(getProducts(obj))
    },[location])

  
  return (
    <DIV>
      {
        products.length>0 && products.map((el)=> {
            return <ProductCart  key={el.id} {...el} obj={obj}/>
        })
      }
    </DIV>
  )
}

export default ProductList;

const DIV = styled.div`
display: grid;
grid-template-columns: repeat(4 ,1fr);
margin:10px;
margin-top:10px;
gap:20px;
`;
