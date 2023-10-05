import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployee = createAsyncThunk('employee/getAll', async (api)=>{
    const {data} = await axios.get(`https://employee-management-api-o905.onrender.com/api/employee`);
    // const data = await response.json();
    console.log('data: ', data);
    return data;
    // console.log('response: ', response);
})


const initialState = {
    lists : [],
    loading : false

} as any;

const employeeSlice = createSlice({
    name : 'employee',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchEmployee.fulfilled, (state,action)=>{
            state.loading = false
            state.lists = (action.payload)
        });
        builder.addCase(fetchEmployee.pending, (state)=>{
            state.loading = true;
        })
    }

})

export default employeeSlice.reducer;