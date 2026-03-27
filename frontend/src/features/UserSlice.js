import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useEffect } from "react";

const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");
const initialState = {
    user: userFromStorage ? JSON.parse(localStorage.getItem('user')) : null,
    token: tokenFromStorage ? JSON.parse(localStorage.getItem('token')) :null,
    loading:false,
    error:null
}


// useEffect(() => {
//     localStorage.setItem('user',JSON.stringify(state.user))
// },[state.user])

export const register = createAsyncThunk('users/register',async (formdata) => {
    const res = await axios.post('http://localhost:5000/users/register',formdata)
    return res.data
})

export const login = createAsyncThunk('users/login',async (formdata) => {
    const res = await axios.post('http://localhost:5000/users/login',formdata)
    return res.data
})

const UserSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        logout:(state)=>{
state.user=null
state.token=null
localStorage.removeItem('user')
localStorage.removeItem('token')
        }
    },
    extraReducers(builder){
        builder.addCase(register.pending,(state,action) => {
            state.loading = true
        })
        .addCase(register.fulfilled,(state,action) => {
            state.loading = false
            if(action.payload.error){
                return alert(action.payload.error)
            }else if(action.payload.message){
                return alert(action.payload.message)
            }
        })
        .addCase(login.pending,(state,action) => {
            state.loading = true
        })
        .addCase(login.fulfilled,(state,action) => {
            state.loading = false
            state.user = action.payload.currentuser
            state.token = action.payload.token
            localStorage.setItem('user',JSON.stringify(state.user))
            localStorage.setItem('token',JSON.stringify(state.token))

        })
        .addCase(login.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload.error
        })
    }
})

export const {logout} = UserSlice.actions
export default UserSlice.reducer

