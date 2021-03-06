"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
require("./tachyons.css");
var reporting_tool_1 = __importDefault(require("./client/reporting-tool"));
var App = function () {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(reporting_tool_1.default, null)));
};
exports.default = App;
