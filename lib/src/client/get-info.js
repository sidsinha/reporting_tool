"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var browserCookies = document.cookie.split(";");
var localStorage = window.sessionStorage;
var ReportNow = function () {
    var _a = react_1.useState(""), currentCookie = _a[0], setCurrentCookie = _a[1];
    var _b = react_1.useState(""), currentStorageValue = _b[0], setCurrentStorageValue = _b[1];
    var onSelectCookie = function (event) {
        setCurrentCookie(event.target.value);
    };
    var onSelectLocalStorage = function (event) {
        setCurrentStorageValue(event.target.value);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: "f2 fw2 black-90 mv3" }, "GET INFORMTAION"),
        react_1.default.createElement("div", { "data-automation-id": "add-new-item", className: "flex flex-column w-90 center bg-white pa4 mt3" },
            browserCookies.length &&
                react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                    react_1.default.createElement("div", { className: "tl" },
                        react_1.default.createElement("label", { className: "tl mb2" }, "Browser Cookies"),
                        react_1.default.createElement("span", { className: "f7" }, "(select cookie name, to see their respective value)")),
                    react_1.default.createElement("select", { onChange: onSelectCookie },
                        react_1.default.createElement("option", { value: "" }, "Select"),
                        browserCookies.map(function (cookie) {
                            var cookieItem = cookie.split("=");
                            return react_1.default.createElement("option", { value: cookieItem[1] }, cookieItem[0]);
                        })),
                    currentCookie &&
                        react_1.default.createElement("div", { className: "bg-light-yellow tl pa2 f6" }, currentCookie)),
            localStorage.length &&
                react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                    react_1.default.createElement("div", { className: "tl" },
                        react_1.default.createElement("label", { className: "tl mb2" }, "Local Storage"),
                        react_1.default.createElement("span", { className: "f7" }, "(select local storage key, to see their respective value)")),
                    react_1.default.createElement("select", { onChange: onSelectLocalStorage },
                        react_1.default.createElement("option", { value: "" }, "Select"),
                        Object.keys(localStorage).map(function (key) {
                            return react_1.default.createElement("option", { value: localStorage[key] }, key);
                        })),
                    currentStorageValue &&
                        react_1.default.createElement("div", { className: "bg-light-yellow tl pa2 f6" }, currentStorageValue)))));
};
exports.default = ReportNow;
