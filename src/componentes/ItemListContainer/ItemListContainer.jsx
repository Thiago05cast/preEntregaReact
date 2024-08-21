import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import Spinner from '../spinner/spinner'


const ItemListContainer = ({greeting}) => {

    const [products,setProducts] = useState ([])
    const [loading,setLoading] = useState(true)

    const {categoryId} = useParams();

    useEffect(() => {
    
      const fetchData = async () => {
try{
  const response = await fetch('/productos.json') 
  const data = await response.json()
  const filteredProducts =categoryId ? data.filter((p) => p.category === categoryId) : data 
  setProducts(filteredProducts)

}catch(error){
  console.log(error)
}finally{
  setLoading(false)
}

}

  fetchData()

    },[categoryId])

  return (
    <div className='container'>
        <h1>{greeting}</h1>

        
        
        {loading ? <Spinner/> : <ItemList products={products}/>}
      </div>
)}
      
    
    
  
  


export default ItemListContainer