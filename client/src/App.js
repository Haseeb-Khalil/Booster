import { Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import About from "./pages/About";
import Home from "./pages/Home";
import { blue } from "@material-ui/core/colors";


const theme = createTheme({
	palette: {
		primary: {
			main: "#ffc107",
		},
		secondary: blue,
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

const App = () => (
	<ThemeProvider theme={theme}>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
	</ThemeProvider>
);

export default App;
