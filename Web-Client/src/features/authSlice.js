import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  name: "",
};

const authSlice = createSlice({
  initialState,
  name: "isLoggedIn",
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.name = "";
    },
  },
});

const { actions } = authSlice;

export const { login, logout } = actions;

export default authSlice.reducer;
