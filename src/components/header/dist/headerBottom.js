"use client";
"use strict";
exports.__esModule = true;
require("./header.scss");
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var react_redux_1 = require("react-redux");
var utilsSlice_1 = require("@/app/store/utilsSlice");
var navlink_1 = require("@/util/NavLink/navlink");
var listOfPages_1 = require("@/util/listOfPages");
function HeaderBottom() {
    var dispatch = react_redux_1.useDispatch();
    var handleMouseEnter = function () {
        dispatch(utilsSlice_1.utilsActions.showCtg());
    };
    return (React.createElement("div", { className: "header-bottom" },
        React.createElement("div", { className: "categories-btn", onMouseEnter: handleMouseEnter },
            React.createElement(md_1.MdOutlineSort, null),
            React.createElement("span", null, "\u053F\u0561\u057F\u0565\u0563\u0578\u0580\u056B\u0561\u0576\u0565\u0580"),
            React.createElement(io_1.IoIosArrowDown, null)),
        React.createElement("div", { className: "pages" }, listOfPages_1.pages.map(function (page) {
            return (React.createElement(navlink_1["default"], { key: page.id, href: page.path },
                React.createElement("img", { src: page.img }),
                page.name));
        }))));
}
exports["default"] = HeaderBottom;
