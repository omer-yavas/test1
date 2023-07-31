import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const currentUser = (state) => state.user.user;
export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
