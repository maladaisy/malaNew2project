import { createSlice } from "@reduxjs/toolkit";
import {
  AuthRegisterMethod,
  LoginMethod,
} from "../Authactioncreator/Authactioncreator";

let initialState = {
  message: null,
  err: null,
  Loading: false,
  logindata: null,
  loginerr: null,
  LoginLoading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      (state.logindata = null),
        (state.loginerr = null),
        (state.LoginLoading = false);
        localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthRegisterMethod.pending, (state) => {
        (state.Loading = true), (state.err = null), (state.message = null);
      })
      .addCase(AuthRegisterMethod.fulfilled, (state, action) => {
        (state.Loading = false),
          (state.message = action.payload),
          (state.err = null);
      })
      .addCase(AuthRegisterMethod.rejected, (state, action) => {
        (state.Loading = true),
          (state.message = null),
          (state.err = action.error.message || "Error Message");
      })
      .addCase(LoginMethod.pending, (state) => {
        (state.LoginLoading = true),
          (state.loginerr = null),
          (state.logindata = null);
      })
      .addCase(LoginMethod.fulfilled, (state, action) => {
        (state.LoginLoading = false),
          (state.logindata = action.payload),
          (state.loginerr = null);
        console.log("login actions", action.payload.data);
        localStorage.setItem("token", action.payload.data ? action?.payload?.data?.token : "");
      })
      .addCase(LoginMethod.rejected, (state, action) => {
        state.LoginLoading = false;
        state.logindata = null;

        if (action.error.message === "Request failed with status code 400") {
          state.loginerr = "Access Denied!!";
        } else {
          state.loginerr = action.error.message || "Something Went Wrong";
        }
        localStorage.removeItem("token");
      });
  },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
