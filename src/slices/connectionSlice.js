import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const {
  reducer: connectionReducer,
  actions: { setLoggedIn, setLoggedOut },
} = connectionSlice;
