import { Route, Routes } from "react-router-dom";
import Energise from "./pages/mainPage/components/home/Energise";
import { useState, useEffect } from "react";
import About from "./pages/secondPage/About";
import Home from "./pages/mainPage/components/home/Home.js";

const App = () => {
	const [energisers, setEnergisers] = useState();
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
				console.log(data);
				setEnergisers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
	<Routes>
		<Route path="/" element={<Home energisers={energisers} />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/energiser/:id" element={<Energise energisers={energisers} />} />
	</Routes>
	);
};

export default App;
