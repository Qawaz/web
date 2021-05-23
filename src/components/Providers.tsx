import * as React from "react"
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {dark} from "../theme/themes";

export default function Providers(props) {
    return (
        <MuiThemeProvider theme={createMuiTheme(dark)}>
            {props.children}
        </MuiThemeProvider>
    )
}
