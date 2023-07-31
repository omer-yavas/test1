import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:
    typeof localStorage !== "undefined"
      ? localStorage.getItem("isLoggedIn")
      : null,
  userId:
    typeof localStorage !== "undefined" ? localStorage.getItem("userId") : "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logIn: (state, action) => {},
    logOut: (state, action) => {
      state.isLoggedIn = false;
      state.userId = "";
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
