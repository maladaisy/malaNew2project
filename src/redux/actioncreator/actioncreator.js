import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {Configuration1} from "../../config/config1"

export const ProductDetail = createAsyncThunk(
    "ecommerce/ProductDetail",
    async (_,{rejectWithValue}) => {
      try {
        const response = await axios.get('https://products-rkli.onrender.com/api/v1/products/list');
        return response.data;
      } catch (error) {
        console.error('Error fetching product details:', error.response.data.error);
        
       throw rejectWithValue(error.response.data.error)
      }
    }
  );