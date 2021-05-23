"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var core_1 = require("@material-ui/core");
var themes_1 = require("../theme/themes");
function Providers(props) {
    return (<core_1.MuiThemeProvider theme={core_1.createMuiTheme(themes_1.dark)}>
            {props.children}
        </core_1.MuiThemeProvider>);
}
exports.default = Providers;
