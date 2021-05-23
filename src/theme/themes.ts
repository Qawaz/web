import {ThemeOptions} from "@material-ui/core";

export enum ThemeType {
    Light = "light",
    Dark = "dark"
}

export const light: ThemeOptions = {
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

export const dark: ThemeOptions = {
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
