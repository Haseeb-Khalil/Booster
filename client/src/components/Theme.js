import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
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
	},
});

export default Theme;
