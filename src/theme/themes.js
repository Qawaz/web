"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dark = exports.light = exports.ThemeType = void 0;
var ThemeType;
(function (ThemeType) {
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType = exports.ThemeType || (exports.ThemeType = {}));
exports.light = {
    palette: {
        type: "light",
        primary: {
            light: "rgba(255, 177, 0, 1)",
            main: "rgba(236, 119, 22, 1)",
            dark: "rgba(235, 99, 25, 1)",
        },
        secondary: {
            light: "rgba(224, 130, 96, 1)",
            main: "rgba(184, 110, 84, 1)",
            dark: "rgba(148, 89, 69, 1)",
        },
    },
};
exports.dark = {
    palette: {
        type: "dark",
        primary: {
            light: "rgba(255, 177, 0, 1)",
            "main": "rgba(236, 119, 22, 1)",
            "dark": "rgba(235, 99, 25, 1)",
        },
        secondary: {
            light: "rgba(224, 130, 96, 1)",
            main: "rgba(184, 110, 84, 1)",
            dark: "rgba(148, 89, 69, 1)",
        },
    },
};
