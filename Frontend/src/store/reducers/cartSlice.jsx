import {createSlice} from '@reduxjs/toolkit';

const initialState={
    carts:[],
}


const cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        loadcarts:(state,action)=>{
            state.carts=action.payload;
        }
    }
});

export default cartslice.reducer;
export const {loadcarts}=cartslice.actions;