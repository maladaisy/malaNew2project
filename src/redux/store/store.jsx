import { configureStore } from '@reduxjs/toolkit';
import CartReducer from "../Slice/Slice";
import AddCartSlice from '../Slice/AddCartSlice';
import AuthSlice from '../AuthSlice/AuthSlice';


export const store = configureStore({
    reducer: {
        cart: CartReducer,
        addCart: AddCartSlice,
        auth: AuthSlice
      },
})


