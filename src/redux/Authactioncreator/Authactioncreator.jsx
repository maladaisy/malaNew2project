import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const AuthRegisterMethod = createAsyncThunk("auth/register", async(payload, thunkApi) => {
    try {
        let response = axios.post(`https://user-modue.onrender.com/api/v1/user/create`, payload, {
            headers: { 
                'Content-Type': 'application/json'
            },
            maxBodyLength: Infinity,
        })
        return response
    } catch (error) {
        throw thunkApi.rejectWithValue(error.response ? error.response.data : error.message)
    }
})


export const LoginMethod = createAsyncThunk("auth/login", async(payload, thunkApi) => {
    try {
        let response = axios.post(`https://user-modue.onrender.com/api/v1/user/login`, payload, {
            headers: { 
                'Content-Type': 'application/json'
            },
            maxBodyLength: Infinity,
        })

        
        return response
    } catch (error) {
        throw thunkApi.rejectWithValue(error.response ? error.response.data : error.message)
    }
})