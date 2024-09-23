"use client";
"use strict";
exports.__esModule = true;
exports.utilsActions = exports.utilsSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    showCtgBool: false,
    showSupportBool: false,
    showAuthBool: false
};
exports.utilsSlice = toolkit_1.createSlice({
    name: "utils",
    initialState: initialState,
    reducers: {
        showCtg: function (state) {
            state.showCtgBool = true;
        },
        hideCtg: function (state) {
            state.showCtgBool = false;
        },
        showSupport: function (state) {
            state.showSupportBool = !state.showSupportBool;
        },
        showAuthentiaction: function (state) {
            state.showAuthBool = !state.showAuthBool;
        }
    }
});
exports.utilsActions = exports.utilsSlice.actions;
exports["default"] = exports.utilsSlice.reducer;
