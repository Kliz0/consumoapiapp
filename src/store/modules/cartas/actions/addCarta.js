import { createSlice } from "@reduxjs/toolkit";

const AddCartaSlice = createSlice({
  name: "add_carta",
  initialState: {
    hasFinished: false,
    isRequesting: false,
    successPayload: [],
    errors: [],
  },
  reducers: {
    addCartaRequest: (state) => {
      state.hasFinished = false;
      state.isRequesting = true;
    },
    addCartaSuccess: (state, action) => {
      state.hasFinished = true;
      state.isRequesting = false;
      state.successPayload = action.payload;
      state.errors = [];
    },

    addCartaFail: (state, action) => {
      state.hasFinished = true;
      state.isRequesting = false;
      state.successPayload = [];
      state.errors = action.payload;
    },
  },
});

export const { addCartaRequest, addCartaSuccess, addCartaFail } =
  AddCartaSlice.actions;

export default AddCartaSlice.reducer;
