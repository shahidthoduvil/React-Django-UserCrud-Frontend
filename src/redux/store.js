import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthContext"
import cartReducer from './cart'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart:cartReducer
    }
})