"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./header.scss");
var io5_1 = require("react-icons/io5");
var respComps_1 = require("./respComps");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var utilsSlice_1 = require("@/app/store/utilsSlice");
var searchSlice_1 = require("@/app/store/searchSlice");
var tfi_1 = require("react-icons/tfi");
var search_1 = require("@/app/services/search");
var link_1 = require("next/link");
function HeaderCenter() {
    var _a = react_1.useState(window.innerWidth <= 768), isMobileView = _a[0], setIsMobileView = _a[1];
    var _b = search_1.useGetSearchResultMutation(), getSearchResult = _b[0], _c = _b[1], isLoading = _c.isLoading, isError = _c.isError;
    var showSearchContBool = react_redux_1.useSelector(function (state) { return state.search.showSearchContBool; });
    var dispatch = react_redux_1.useDispatch();
    function openAuthHandler() {
        dispatch(utilsSlice_1.utilsActions.showAuthentiaction());
    }
    function showSearchContainerHandler() {
        dispatch(searchSlice_1.searchActions.showSearchCont());
    }
    function closeSearchContHandler() {
        dispatch(searchSlice_1.searchActions.closeSearchCont());
    }
    function searchValueHandler(value) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getSearchResult(value)];
                    case 1:
                        data = _a.sent();
                        dispatch(searchSlice_1.searchActions.getSearchResult(data === null || data === void 0 ? void 0 : data.data.data.products));
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        var handleResize = function () {
            setIsMobileView(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (React.createElement("div", { className: "header-center" },
        React.createElement("div", { className: "header-center-left" },
            isMobileView ? (React.createElement("div", null,
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("img", { src: "https://yerevan-city.am/assets/images/logo.svg", width: "60px", height: "60px", alt: "" })),
                React.createElement(respComps_1["default"], null))) : (React.createElement(link_1["default"], { href: "/" },
                React.createElement("img", { src: "https://yerevan-city.am/assets/images/logo.svg", width: "60px", height: "50px", alt: "" }))),
            React.createElement("input", { type: "text", placeholder: "\u0548\u0580\u0578\u0576\u0578\u0582\u0574", onClick: showSearchContainerHandler, onChange: function (e) { return searchValueHandler(e.target.value); } }),
            showSearchContBool && React.createElement(tfi_1.TfiClose, { onClick: closeSearchContHandler })),
        React.createElement("div", { className: "header-center-right" },
            React.createElement("span", null,
                React.createElement(io5_1.IoHeartOutline, null)),
            React.createElement("span", null,
                React.createElement(io5_1.IoCartOutline, null)),
            React.createElement("span", { onClick: openAuthHandler }, "\u0544\u0578\u0582\u057F\u0584 \u0563\u0578\u0580\u056E\u0565\u056C"))));
}
exports["default"] = HeaderCenter;
