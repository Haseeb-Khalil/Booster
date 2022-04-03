import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
	typography: {
		h1: {
			fontFamily: "Electrolize",
		},
		h3: {
			fontFamily: "Electrolize",
		},
		h4: {
			fontFamily: "Electrolize",
		},
	},
});
// ***  this is for h2 ***
Theme.typography.h2 = {
	fontFamily: "Electrolize",
	fontSize: "6em",
	fontWeight: "500",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.85rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "2rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "4rem",
	},
};
// *** this is for h5 ***
Theme.typography.h5 = {
	fontFamily: "Electrolize",
	fontSize: "4em",
	fontWeight: "400",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.75rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "1.5rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "2rem",
	},
};

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

Theme.typography.buttonFont = {
	fontFamily: "Electrolize",
	fontSize: "1.2rem",
	[Theme.breakpoints.up("xs")]: {
		fontSize: "0.5rem",
	},
	[Theme.breakpoints.up("sm")]: {
		fontSize: "0.7rem",
	},
	[Theme.breakpoints.up("lg")]: {
		fontSize: "1rem",
	},
};


export default Theme;