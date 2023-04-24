import React, { useEffect, useState } from 'react'
import {useSearchParams } from 'react-router-dom'

const SideBar = () => {
   const [search, setSearch] = useSearchParams()
   const initcategory = search.getAll("category")
   const initialOrder = search.get("order")
const [category, setCategory] = useState(initcategory || [])
const [order, setOrder] = useState(initialOrder || "")
const [page, setPage] = useState(1)
let limit = 5
const handleChange = (e) => {

   let newCategory = [...category]
   let value = e.target.value

   if(newCategory.includes(value)){
    newCategory = newCategory.filter((el)=> el !== value)
   }else{
     newCategory.push(value)
   }
   setCategory(newCategory)
}


const handleSort = (e) => {
setOrder(e.target.value)
}

useEffect(()=> {
  let params = {
    category,
    page,
  
  }
order && (params.order = order)


  setSearch(params)
},[category,order,page])


  return (
    <div>
        <h3>Filter By</h3>
        <div>
      <input type="checkbox" value={"men"} onChange={handleChange} checked={category.includes("men")}/>
      <label>Men</label>
        </div>
        <div>
      <input type="checkbox" value={"women"} onChange={handleChange} checked={category.includes("women")}/>
      <label>Women</label>
        </div>
        <div>
      <input type="checkbox" value={"kids"} onChange={handleChange} checked={category.includes("kids")}/>
      <label>Kids</label>
        </div>
        <hr />
        <div onChange={handleSort}>
          <div>
            <input type="radio" value={"asc"} name='order' defaultChecked={order==="asc"}/>
            <label>Ascending</label>
          </div>
          <div>
            <input type="radio" value={"desc"} name='order' defaultChecked={order==="desc"}/>
            <label>descending</label>
          </div>
          <button disabled={page==1} onClick={()=>setPage(page-1)}>PRE</button><br /><br />
          <h3>{page}</h3>
          <button onClick={()=>setPage(page+1)}>NEXT</button>
        </div>
    </div>
  )
}

export default SideBar
