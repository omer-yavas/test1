import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth";
import UserReducer from "./slices/userSlice";
const store = configureStore({
  reducer: { auth: AuthReducer, user: UserReducer },
});

export default store;
