import Home from "./pages/Home";
import AllEnergisers from "./pages/AllEnergisers";
import Host from "./pages/Host";
import Energise from "./pages/Energise";
import Theme from "./components/Theme";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";


const App = () => {
	const [energisers, setEnergisers] = useState([]);
	const api = process.env.API_URL || "http://localhost:3100/api";

	useEffect(() => {
		fetch(api + "/energisers")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				// console.log(data);
				setEnergisers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return energisers ? (
		<ThemeProvider theme={Theme}>
			<Routes>
				<Route path="/" element={<Home energisers={energisers} />} />
				<Route
					path="/energisers"
					element={<AllEnergisers energisers={energisers} />}
				/>
				<Route path="/game/:code" element={<Energise />} />
				<Route path="/energiser/:id" element={<Host />} />
			</Routes>
		</ThemeProvider>
	) : (
		<CircularProgress color="success" />
	);
};

export default App;
