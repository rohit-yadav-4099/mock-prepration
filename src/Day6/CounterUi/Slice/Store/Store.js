import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from '../Slice'

const Store = configureStore({
    reducer : {
        Data : CounterSlice
    }
})

export default Store