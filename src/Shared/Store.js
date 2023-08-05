import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './../Pages/Cart/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer

        //Other reducer comes here
    }
})


export default store;