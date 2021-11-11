"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ReportNow = function () {
    var intialState = {
        "teamToReport": "",
        "summary": "",
        "description": "",
        "reporter": "",
        "severity": ""
    };
    var _a = react_1.useState(intialState), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState(false), alert = _b[0], setAlert = _b[1];
    var onSubmit = function () {
        var isEmpty = Object.values(formData).some(function (x) { return (x === null || x === ''); });
        if (isEmpty) {
            setAlert(true);
        }
        else {
            var jiraUrl = "https://jira.walmart.com/secure/CreateIssueDetails!init.jspa?summary=" + encodeURI(formData.summary) + "&description=" + encodeURI(formData.description) + "&reporter=" + encodeURI(formData.reporter) + "&pid=45703&issuetype=1&reporter=s0s05pn&customfield_10216=14900&customfield_10212=25900&priority=11&customfield_20400=5791649";
            window.open(jiraUrl, "_blank");
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: "f2 fw2 black-90 mv3" }, "Report Now"),
        react_1.default.createElement("div", { "data-automation-id": "add-new-item", className: "flex flex-column w-90 center bg-white pa4 mt3" },
            alert && react_1.default.createElement("div", { className: "bg-gold pv2 mb3 b white ph1 f6" }, "\u26A0 Please fill all details before you submit"),
            react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                react_1.default.createElement("div", { className: "tl" },
                    react_1.default.createElement("label", { className: "tl mb2" }, "Team to Report*"),
                    react_1.default.createElement("span", { className: "f7" }, "(respective tag will be added automatically)")),
                react_1.default.createElement("select", { onChange: function (e) { return setFormData(__assign(__assign({}, formData), { "teamToReport": e.target.value })); } },
                    react_1.default.createElement("option", { value: "" }, "Select One"),
                    react_1.default.createElement("option", { value: "Glass-Web-Cart" }, "Glass-Web-Cart"),
                    react_1.default.createElement("option", { value: "Glass-Web-PostTx-US" }, "Glass-Web-PostTx"))),
            react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                react_1.default.createElement("div", { className: "tl" },
                    react_1.default.createElement("label", { className: "tl mb2" }, "Summary*"),
                    react_1.default.createElement("span", { className: "f7" }, "(jira title)")),
                react_1.default.createElement("input", { className: "tl pa1", type: "text", maxLength: 40, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { "summary": e.target.value })); } })),
            react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                react_1.default.createElement("div", { className: "tl" },
                    react_1.default.createElement("label", { className: "tl mb2" }, "Description*"),
                    react_1.default.createElement("span", { className: "f7" }, "(little more information about bug)")),
                react_1.default.createElement("textarea", { rows: 5, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { "description": e.target.value })); } })),
            react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                react_1.default.createElement("div", { className: "tl" },
                    react_1.default.createElement("label", { className: "tl mb2" }, "Severity*"),
                    react_1.default.createElement("span", { className: "f7" }, "(how big is the issue)")),
                react_1.default.createElement("select", { onChange: function (e) { return setFormData(__assign(__assign({}, formData), { "severity": e.target.value })); } },
                    react_1.default.createElement("option", { value: "" }, "None"),
                    react_1.default.createElement("option", { value: "10115" }, "1 - Critical"),
                    react_1.default.createElement("option", { value: "10116" }, "2 - Major Problem"),
                    react_1.default.createElement("option", { value: "10117" }, "3 - Minor Problem"),
                    react_1.default.createElement("option", { value: "10118" }, "4 - Cosmetic"),
                    react_1.default.createElement("option", { value: "14900" }, "TBD"))),
            react_1.default.createElement("div", { className: "pv2 flex flex-column" },
                react_1.default.createElement("div", { className: "tl" },
                    react_1.default.createElement("label", { className: "tl mb2" }, "Reporter*"),
                    react_1.default.createElement("span", { className: "f7" }, "(walmart username)")),
                react_1.default.createElement("input", { className: "tl pa1", type: "text", onChange: function (e) { return setFormData(__assign(__assign({}, formData), { "reporter": e.target.value })); } })),
            react_1.default.createElement("button", { className: "pointer bg-dark-green white pv2 ph4 bn fl mt3", onClick: onSubmit }, "\u2714 SUBMIT"))));
};
exports.default = ReportNow;
