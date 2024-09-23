"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
require("./search.scss");
var clickOutSide_1 = require("@/util/clickOutSide");
var searchSlice_1 = require("@/app/store/searchSlice");
var product_1 = require("../product/product");
var search_1 = require("@/app/services/search");
function Search() {
    var data = search_1.useGetMostSearchedItemsQuery().data;
    var showSearchContBool = react_redux_1.useSelector(function (state) { return state.search.showSearchContBool; });
    var mostSearchedItemsArray = react_redux_1.useSelector(function (state) { return state.search.mostSearchedItemsArray; });
    var searchResultArray = react_redux_1.useSelector(function (state) { return state.search.searchResultArray; });
    var dispatch = react_redux_1.useDispatch();
    var handleClickOutside = function () {
        dispatch(searchSlice_1.searchActions.closeSearchCont());
    };
    console.log();
    return (React.createElement("div", { className: "search-container", style: {
            transform: "rotateX(" + (showSearchContBool ? "0deg" : "90deg") + ")"
        } },
        React.createElement(clickOutSide_1["default"], { onClickOutside: handleClickOutside },
            React.createElement("div", { className: "search-main" },
                React.createElement("div", { className: "search-result" }, !searchResultArray.length
                    ? data === null || data === void 0 ? void 0 : data.data.specialItems[0].products.map(function (product) {
                        return React.createElement(product_1["default"], { product: product });
                    }) : searchResultArray.map(function (product) {
                    return React.createElement(product_1["default"], { product: product });
                }))))));
}
exports["default"] = Search;
