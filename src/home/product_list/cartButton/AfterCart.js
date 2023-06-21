import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment } from '../../../redux/cart'
import './CartButton.css'
const AfterCart=({cartCount,productID})=> {
    const dispatch=useDispatch()

  return (
    <div className='after-cart'>
        <button className='cart-counter-button'onClick={()=>dispatch(decrement(productID))} >-</button>
        <div className='cart-counter'>{cartCount}</div>
        <button className='cart-counter-button ' onClick={()=>dispatch(increment(productID))}>+</ button>

    </div>
  
  )
}

export default AfterCart