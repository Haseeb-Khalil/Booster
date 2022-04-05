import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
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
	},
});

Theme.typography.h6 = {
	fontFamily: "QuickSand",
	fontSize: "1.2rem",
	fontWeight: "500",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.5rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "1rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "1.6rem",
	},
};

Theme.typography.body1 = {
	fontFamily: "QuickSand",
	fontSize: "1em",
	fontWeight: "300",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.5rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "1rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "1.3rem",
	},
};

Theme.typography.body2 = {
	fontFamily: "QuickSand",
	fontSize: "1em",
	fontWeight: "300",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.5rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "0.75rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "1rem",
	},
};
export default Theme;