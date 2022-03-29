import Home from "./pages/Home";
import AllEnergisers from "./pages/AllEnergisers";
import Host from "./pages/Host";
import Energise from "./pages/Energise";
import Theme from "./components/Theme";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { io } from "socket.io-client";

const App = () => {

const [onlineCount, setOnlineCount] = useState(0);
	useEffect(()=>{
		const socket=io("http://localhost:3100");
		socket.on("incomingUsers",(attend)=>{
			setOnlineCount(attend);
		});

	},[]);
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
				<Route path="/game/:code" element={<Energise onlineCount={onlineCount} />} />
				<Route path="/energiser/:id" element={<Host onlineCount={onlineCount}  />} />
			</Routes>

		</ThemeProvider>
	) : (
		<div>Loading...</div>
	);
};

export default App;