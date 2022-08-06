import { createSlice } from "@reduxjs/toolkit";

const GetCartasSlice = createSlice({
  name: "get_cartas",
  initialState: {
    hasFinished: false,
    isRequesting: false,
    successPayload: [],
    errors: [],
  },
  reducers: {
    getCartasRequest: (state) => {
      state.hasFinished = false;
      state.isRequesting = true;
    },
    getCartasSuccess: (state, action) => {
      state.hasFinished = true;
      state.isRequesting = false;
      state.successPayload = action.payload;
      state.errors = [];
    },
    getCartasReset: (state) => {
      state.hasFinished = false;
      state.isRequesting = false;
      state.successPayload = [];
      state.errors = [];
    },
    getCartasFail: (state, action) => {
      state.hasFinished = true;
      state.isRequesting = false;
      state.successPayload = [];
      state.errors = action.payload;
    },
  },
});

export const {
  getCartasRequest,
  getCartasSuccess,
  getCartasReset,
  getCartasFail,
} = GetCartasSlice.actions;

export default GetCartasSlice.reducer;
