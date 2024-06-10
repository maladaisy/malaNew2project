import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductDetail } from "../actioncreator/actioncreator";
import makeUp1 from "../../assets/images/ImageBack.webp";
import makeUp2 from "../../assets/images/fly.png";
import makeUp3 from "../../assets/images/basket.png";

// makeUp1,
// makeUp2,
// makeUp3,
let initialState = {
  cardData: [],
  status: false,
  errorCard: "",
  productImages: [
    "https://images.pexels.com/photos/3517928/pexels-photo-3517928.jpeg",
    "https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg",
   
    "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg",
    "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg",
    
  ],
};

const SliceReducer = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ProductDetail.pending, (state, action) => {
        state.status = true;
        state.cardData = null;
        state.errorCard = null;
      })
      .addCase(ProductDetail.fulfilled, (state, action) => {
        state.status = false;
        state.cardData = action.payload;
        state.errorCard = null;
      })
      .addCase(ProductDetail.rejected, (state, action) => {
        state.status = true;
        state.cardData = null;
        state.errorCard = action.error || "Something Wrong";
      });
  },
});

export default SliceReducer.reducer;
