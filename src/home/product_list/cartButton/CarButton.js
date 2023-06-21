import React from 'react'
import { useSelector } from 'react-redux';
import BeforeCart from './BeforeCart';
import AfterCart from './AfterCart';

const CarButton=({product})=> {
    const {cartList} =useSelector((state)=>state.cart);
    const cartCount=cartList.find((item)=>item?.id===product?.id)?.count
  return (
    <div>
    { cartCount>0? <AfterCart productID={product?.id}  cartCount={cartCount}/> : <BeforeCart product={product}/>}

    </div>
  )
}

export default CarButton