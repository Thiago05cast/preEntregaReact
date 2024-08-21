import React from 'react'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({product}) => {
  return (
    <div className='cardContainer'>
        {product.map((item) =>(
            <Item key={item.id} item={item}/>
        ))}
    </div>
  )
  
}

export default ItemList;