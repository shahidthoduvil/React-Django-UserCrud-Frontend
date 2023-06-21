import React from 'react'
import './CartButton.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart'
const BeforeCart=({product})=> {

    const dispatch=useDispatch();
  return (
    <div className='before-cart'>
    <button className='add-cart-button' onClick={()=>dispatch(addToCart(product))}>ADD to cart</button>
  </div>
  )
}

export default BeforeCart