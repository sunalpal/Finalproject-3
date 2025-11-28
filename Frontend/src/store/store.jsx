import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import userSlice from './reducers/userSlice'
import productSlice from './reducers/productSlice'

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlice,
        product:productSlice,
    }
})