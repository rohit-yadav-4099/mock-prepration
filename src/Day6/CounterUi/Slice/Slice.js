import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    val : 0
}

const CounterSlice = createSlice({
    name :  "Counter",
    initialState,
    reducers : {
        add : (state, action) => {
            state.val = state.val + 1
        },
        sub : (state, action) => {
            state.val -=  1
        },
        multiply : (state, action) => {
            state.val *= 2
        },
        divide : (state, action) => {
            state.val /=  2
        }
    }
})

// Action should be call in UI part
export  const {add, sub, multiply, divide} = CounterSlice.actions;

// Action should be call in 
export default CounterSlice.reducer