"use client";
import { createSlice } from "@reduxjs/toolkit";
import { promoApi } from "../services/promo";

const initialState = {
  promoArray: [],
};

export const promoSlice = createSlice({
  name: "promo",
  initialState,
  reducers: {
    getPromos(state,{payload}){
      
    }

  },

  extraReducers: (builder) => {
    builder.addMatcher(
      promoApi.endpoints.getPromo.matchFulfilled,
      (state: any, { payload }: any) => {
        state.promoArray.push(payload?.data.data);
      }
    );
  },
});

export const promoActions = promoSlice.actions;
export default promoSlice.reducer;
