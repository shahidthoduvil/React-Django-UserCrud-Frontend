import { createSlice } from "@reduxjs/toolkit";



const INITIAL_STATE={
    cartList:[],
    cartCount:0
}

const cartSlice=createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
           const itemExist= state.cartList.find((item)=>item.id === action.payload.id)
            if(itemExist){
                state.cartList.forEach((item)=>{
                    if(item?.id===action.payload.id){
                        item.count=1;
                    }
                  })

            }
            else{
                state.cartList.push({
                    ...action.payload,
                    count:1,
                })

            }
           
        },
      
            increment:(state,action)=>{
              const productID= action.payload;
              state.cartList.forEach((item)=>{
                if(item?.id===productID){
                    item.count++;
                }
              })
            },
            decrement:(state,action)=>{
                const productID= action.payload;
                state.cartList.forEach((item)=>{
                  if(item?.id===productID){
                      item.count--;
                  }
                })

            },
      
        
    },

})

export const {increment,decrement,addToCart}=cartSlice.actions

export default cartSlice.reducer;
