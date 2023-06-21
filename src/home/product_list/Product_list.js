import React, { useState } from 'react'
import BeforeCart from './cartButton/BeforeCart'
import AfterCart from './cartButton/AfterCart'
import './Product_list.css'
import { useSelector} from 'react-redux'
import products from '../../api/products.json'
import CarButton from './cartButton/CarButton'
 const Product_list=() =>{
   const {cartCount,cartList} =useSelector((state)=>state.cart);
 

    console.log(cartList);

  
    return (
        <section className='container'>
            {products?.map((product,key)=>(
                <div className="cardpro" style={{width: '18rem;'}}>
                <img class="card-img-top" src={product?.image}alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{product?.title}</h5>
                        <p class="card-text">{ product?.price}</p>
                        <CarButton product={product}/>
                    </div>
            </div>

            ))}
            
        </section>
    )
}

export default Product_list