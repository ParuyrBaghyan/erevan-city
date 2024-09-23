"use strict";
exports.__esModule = true;
var generalBanner_1 = require("@/components/BLOG/general-banner/generalBanner");
require("./page.scss");
var title_1 = require("@/components/BLOG/title/title");
function Page() {
    return (React.createElement("div", { className: "blog-page" },
        React.createElement(generalBanner_1["default"], null),
        React.createElement(title_1["default"], null)));
}
exports["default"] = Page;
