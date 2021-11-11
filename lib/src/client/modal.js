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
var info_png_1 = __importDefault(require("./../assets/info.png"));
var debug_icon_png_1 = __importDefault(require("./../assets/debug-icon.png"));
var feedback_png_1 = __importDefault(require("./../assets/feedback.png"));
var get_info_1 = __importDefault(require("./get-info"));
var report_now_1 = __importDefault(require("./report-now"));
var Modal = function (_a) {
    var callback = _a.callback;
    var _b = react_1.useState(""), tabInfo = _b[0], setTabInfo = _b[1];
    var onClose = function () {
        callback();
        setTabInfo("");
    };
    return (react_1.default.createElement("div", { className: "courier vh-100 flex items-center justify-center" },
        react_1.default.createElement("div", { className: "shadow-4 bg-light-gray w-50 w-100-m w-100-s pa3 f6-m f7-s" },
            react_1.default.createElement("div", { className: "pa3 flex flex-column" },
                react_1.default.createElement("div", { className: "flex justify-between" },
                    react_1.default.createElement("button", { className: "pointer", onClick: function () { return setTabInfo(""); }, disabled: tabInfo ? false : true }, "\u2190 back"),
                    react_1.default.createElement("button", { className: "pointer", onClick: onClose }, "\u2716 close")),
                tabInfo === "GET_INFO" && react_1.default.createElement(get_info_1.default, null),
                tabInfo === "REPORT_NOW" && react_1.default.createElement(report_now_1.default, null),
                !tabInfo &&
                    react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("h1", { className: "f2 fw2 black-90 mv3" }, "Reporting Tool"),
                        react_1.default.createElement("div", { className: "flex justify-around items-center h-100 b ma5" },
                            react_1.default.createElement("button", { className: "flex flex-column bn b pointer", onClick: function () { return setTabInfo("GET_INFO"); } },
                                react_1.default.createElement("div", { className: "self-center" },
                                    react_1.default.createElement("img", { alt: "info-icon", src: info_png_1.default, className: "w2 h2" })),
                                react_1.default.createElement("div", { className: "self-center f6" }, "Get Information")),
                            react_1.default.createElement("button", { className: "flex flex-column bn b pointer", onClick: function () { return setTabInfo("REPORT_NOW"); } },
                                react_1.default.createElement("div", { className: "self-center" },
                                    react_1.default.createElement("img", { alt: "debug-icon", src: debug_icon_png_1.default, className: "w2 h2" })),
                                react_1.default.createElement("div", { className: "self-center f6" }, "Report Now")),
                            react_1.default.createElement("button", { className: "flex flex-column bn b pointer" },
                                react_1.default.createElement("div", { className: "self-center" },
                                    react_1.default.createElement("img", { alt: "feedback-icon", src: feedback_png_1.default, className: "w2 h2" })),
                                react_1.default.createElement("div", { className: "self-center f6" }, "Feedback"))))))));
};
exports.default = Modal;
