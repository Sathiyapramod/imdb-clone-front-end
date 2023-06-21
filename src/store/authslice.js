import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  password: null,
  token: null,
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUsername, setPassword, setToken } = authslice.actions;

export default authslice.reducer;
