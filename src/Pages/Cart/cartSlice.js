import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    items:[],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            state.items.push(action.payload) //add product object to the items array

            const price = action.payload.price;
            state.totalPrice += price;             //add the price
        }
    }

})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;