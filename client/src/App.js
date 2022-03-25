import Energise from "./pages/Energise";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllEnergisers from "./pages/AllEnergisers";
import Theme from "./components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Host from "./pages/Host"

const App = () => {
	const [energisers, setEnergisers] = useState([]);
	const api = "http://localhost:3100/api";

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
				{/* <Route
					path="/energiser/:id"
					element={<Energise energisers={energisers} />}
				/> */}
				<Route path="/game/:code" element={<Energise />} />
				<Route
					path="/energiser/:id"
					element={
						<Host />
					}
				/>
			</Routes>

		</ThemeProvider>
	) : (
		<div>Loading...</div>
	);
};

export default App;