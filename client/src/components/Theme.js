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
		h1: {
			fontFamily: "Electrolize",
		},
		h2: {
			fontFamily: "Electrolize",
		},
		h3: {
			fontFamily: "Electrolize",
		},
		h4: {
			fontFamily: "Electrolize",
		},
		h5: {
			fontFamily: "Electrolize",
		},
		h6: {
			fontFamily: "QuickSand",
		},
		body1: {
			fontFamily: "QuickSand",
			fontWeight: 600,
			fontStyle: "italic",
		},
	},
});

export default Theme;