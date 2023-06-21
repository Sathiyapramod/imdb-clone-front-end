import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  token: null,
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUsername, setToken } = authslice.actions;
export default authslice.reducer;
