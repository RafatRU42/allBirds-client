import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    items:[],
    totalPrice: 0
}

// const storedCartState = JSON.parse(localStorage.getItem('cartState'))
// const initialCartState = storedCartState || initialState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state,action) =>{
            state.items.push(action.payload) //add product object to the items array

            const price = action.payload.price;
            state.totalPrice += price;             //add the price

            localStorage.setItem('cartState',JSON.stringify(state))
        }
    }

})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;