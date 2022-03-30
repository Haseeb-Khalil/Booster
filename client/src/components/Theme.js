import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#fafafa",
			contrastText: "#3D0663",
		},
		secondary: {
			main: "#b71c1c",
			contrastText: "#fff",
		},
		neutral: {
			main: "#000",
			contrastText: "#FF2E63",
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