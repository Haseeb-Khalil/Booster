import Home from "./pages/Home";
import AllEnergisers from "./pages/AllEnergisers";
import Host from "./pages/Host";
import Energise from "./pages/Energise";
import Theme from "./components/Theme";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { io } from "socket.io-client";

console.log("API_URL ---->" + process.env.API_URL);
const App = () => {
	// const api = process.env.API_URL || "/api";
	const api = "https://cyf-booster.herokuapp.com";
	console.log("hello haseeb", api);
	const [onlineCount, setOnlineCount] = useState(0);
	const [energisers, setEnergisers] = useState([]);
	console.log("hello");
	useEffect(() => {
		const socket = io(api);
		console.log(socket);
		socket.on("incomingUsers", (attend) => {
			setOnlineCount(attend);
		});
	}, []);

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
					element={
						<AllEnergisers
							energisers={energisers}
							setEnergisers={setEnergisers}
						/>
					}
				/>
				<Route
					path="/game/:code"
					element={<Energise onlineCount={onlineCount} />}
				/>
				<Route
					path="/energiser/:id"
					element={<Host onlineCount={onlineCount} />}
				/>
			</Routes>
		</ThemeProvider>
	) : (
		<CircularProgress color="success" />
	);
};

export default App;
