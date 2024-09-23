"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
require("./navlink.scss");
var NavLink = function (_a) {
    var href = _a.href, children = _a.children;
    var path = navigation_1.usePathname();
    // Check if the current pathname ends with the href to determine if the link is active
    var isActive = path.endsWith(href);
    return (React.createElement(link_1["default"], { href: href, className: " navlink " + (isActive ? 'nav-active' : '') }, children));
};
exports["default"] = NavLink;
