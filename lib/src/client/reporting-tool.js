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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var debug_icon_png_1 = __importDefault(require("./../assets/debug-icon.png"));
var modal_1 = __importDefault(require("./modal"));
var ReportingTool = function () {
    var _a = react_1.useState(false), modalStatus = _a[0], setModalStatus = _a[1];
    return (modalStatus ?
        react_1.default.createElement(modal_1.default, { callback: function () { return setModalStatus(false); } })
        :
            react_1.default.createElement("div", { className: "vh-100 flex items-center justify-end" },
                react_1.default.createElement("div", { className: "fixed" },
                    react_1.default.createElement("button", { onClick: function () { return setModalStatus(true); } },
                        react_1.default.createElement("img", { alt: "debug-icon", src: debug_icon_png_1.default, className: "w3 h3" })))));
};
exports.default = ReportingTool;
