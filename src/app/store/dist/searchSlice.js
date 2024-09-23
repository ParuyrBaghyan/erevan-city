"use client";
"use strict";
exports.__esModule = true;
exports.searchActions = exports.searchSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    showSearchContBool: false,
    mostSearchedItemsArray: [],
    searchResultArray: []
};
exports.searchSlice = toolkit_1.createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        showSearchCont: function (state) {
            state.showSearchContBool = true;
        },
        closeSearchCont: function (state) {
            state.showSearchContBool = false;
        },
        getSearchResult: function (state, _a) {
            var payload = _a.payload;
            state.searchResultArray = payload;
        }
    }
});
exports.searchActions = exports.searchSlice.actions;
exports["default"] = exports.searchSlice.reducer;
