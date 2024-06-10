import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
  cartQuantity: 0,
  cartStatus: "",
 
};
const AddCartSlice = createSlice({
  name: "addcart",
  initialState,
  reducers: {
    addQuantity(state, action) {
      console.log("Just Check1", action.payload);
      let CartCount = state.cartItems.findIndex(
        (ele) => ele._id === action.payload._id
      );
      console.log("Just Check", CartCount);
      if (CartCount >= 0) {
        state.cartItems[CartCount].cartQuantity += 1;
        state.cartStatus = "second";
        
      } else {
        let temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        state.cartStatus = "initial";
      }
    },
  },
});

export const { addQuantity } = AddCartSlice.actions;
export default AddCartSlice.reducer;
