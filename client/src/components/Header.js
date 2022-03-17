import React from "react";
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import "./header.css";

const theme = createTheme({
	palette: {
		primary: {
			main: "#F41A0C",
			contrastText: "#DDEE14",
		},
		secondary: {
			main: "#DDEE14",
			contrastText: "#F41A0C",
		},
		neutral: {
			main: "#F41A0C",
			contrastText: "#DDEE14",
		},
	},
	typography: {
		fontFamily: "Electrolize",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function Header() {
    return (
			<ThemeProvider theme={theme}>
				<header>
					<Navbar />
				</header>
			</ThemeProvider>
		);
}

export default Header;