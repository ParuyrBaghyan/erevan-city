"use client";
import { createSlice } from "@reduxjs/toolkit";
import { searchApi, useGetMostSearchedItemsQuery } from "../services/search";

const initialState = {
  showSearchContBool: false,
  mostSearchedItemsArray: [],
  searchResultArray: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearchCont(state) {
      state.showSearchContBool = true;
    },
    closeSearchCont(state) {
      state.showSearchContBool = false;
    },
    getSearchResult(state, { payload }) {
      state.searchResultArray = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     searchApi.endpoints.getMostSearchedItems.matchFulfilled,
  //     (state: any, { payload }: any) => {
  //       state.mostSearchedItemsArray = payload?.data.specialItems[0].products;
  //     }
  //   );
  // },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
