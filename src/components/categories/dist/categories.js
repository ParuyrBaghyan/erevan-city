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
require("./categories.scss");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var utilsSlice_1 = require("@/app/store/utilsSlice");
var childrenCtgs_1 = require("./childrenCtgs");
var categories_1 = require("@/app/services/categories");
var clickOutSide_1 = require("@/util/clickOutSide");
function Categories() {
    var getParentCtgs = categories_1.useGetParentCategoriesMutation()[0];
    var getAllChildren = categories_1.useGetAllChildrenMutation()[0];
    var _a = react_1.useState([]), parentCtgs = _a[0], setParentCtgs = _a[1];
    var _b = react_1.useState([]), ctgChildren = _b[0], setCtgChildren = _b[1];
    var _c = react_1.useState(""), showImage = _c[0], setShowImage = _c[1];
    var showCtgBool = react_redux_1.useSelector(function (state) { return state.utils.showCtgBool; });
    var dispatch = react_redux_1.useDispatch();
    function hideCtgHandler() {
        dispatch(utilsSlice_1.utilsActions.hideCtg());
    }
    function getParentCtgsData() {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getParentCtgs(null).unwrap()];
                    case 1:
                        data = _a.sent();
                        setParentCtgs(data.data.categories);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Failed to fetch parent categories:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getAllChildrenData(parentId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, parentCategory, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, getAllChildren(parentId).unwrap()];
                    case 1:
                        data = _a.sent();
                        setCtgChildren(data.data.children);
                        parentCategory = parentCtgs.find(function (item) { return item.id === parentId; });
                        setShowImage((parentCategory === null || parentCategory === void 0 ? void 0 : parentCategory.photo) || "");
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("Failed to fetch child categories:", error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        function getData() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getParentCtgsData()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, getAllChildrenData(4)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        getData();
    }, []);
    return (React.createElement("div", { className: "categories-container", style: { transform: "rotateX(" + (showCtgBool ? "0deg" : "90deg") + ")" } },
        React.createElement(clickOutSide_1["default"], { onClickOutside: hideCtgHandler },
            React.createElement("div", { className: "categories-main" },
                React.createElement("div", { className: "parent-categories" }, parentCtgs.map(function (ctg) { return (React.createElement("span", { key: ctg.id, onMouseEnter: function () { return getAllChildrenData(ctg.id); } }, ctg.name)); })),
                React.createElement(childrenCtgs_1["default"], { ctgChildren: ctgChildren }),
                React.createElement("div", { className: "cover-photo", style: {
                        backgroundImage: "url(" + showImage + ")",
                        backgroundPosition: "100% center",
                        backgroundSize: "cover"
                    } })))));
}
exports["default"] = Categories;
