import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployee = createAsyncThunk('employee/getAll', async (api)=>{
    const {data} = await axios.get(`https://api.github.com/users`);
    // const data = await response.json();
    console.log('data: ', data);
    return data;
    // console.log('response: ', response);
})


const initialState = {
    lists : [],

} as any;

const employeeSlice = createSlice({
    name : 'employee',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchEmployee.fulfilled, (state,action)=>{
            state.lists = (action.payload)
        })
    }

})

export default employeeSlice.reducer;