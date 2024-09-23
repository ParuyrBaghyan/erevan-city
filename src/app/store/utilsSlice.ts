"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCtgBool: false,
  showSupportBool: false,
  showAuthBool: false,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    showCtg(state) {
      state.showCtgBool = true;
    },
    hideCtg(state) {
      state.showCtgBool = false;
    },
    showSupport(state) {
      state.showSupportBool = !state.showSupportBool;
    },
    showAuthentiaction(state) {
      state.showAuthBool = !state.showAuthBool;
    },
  },
});

export const utilsActions = utilsSlice.actions;
export default utilsSlice.reducer;
