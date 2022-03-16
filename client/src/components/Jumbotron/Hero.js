import * as React from "react";
import HeroLayout from "./HeroLayout";
import Typography from "@material-ui/core/Typography";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Registration from "./Registration";

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
const backgroundImage =
	"https://images.unsplash.com/photo-1476018040064-32e98fec7648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80";
function Hero(){
return (
	<ThemeProvider theme={theme}>
		<HeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: "#7fc7d9", // Average color of the background image.
				backgroundPosition: "center",
			}}
		>
			<img
				style={{ display: "none" }}
				src={backgroundImage}
				alt="increase priority"
			/>
			<Typography color="inherit" align="center" variant="h2" marked="center">
				Welcome to the effortless energiser!
			</Typography>
			<Typography color="inherit" align="center" variant="h5">
				get boosted before your meeting
			</Typography>
            <Registration />
		</HeroLayout>
	</ThemeProvider>
);
}

export default Hero;