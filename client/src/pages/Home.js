// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import CardsSection from "../components/CardsCarousel/CardsSection";

import Header from "../components/Header/Header";
import Hero from "../components/Jumbotron/Hero";
import Theme from "../components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";

export function Home({ energisers }) {
	//const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
			<div>
				<ThemeProvider theme={Theme}>
					<Header />
					<Hero />
					{console.log(energisers)}
					<CardsSection energisers={energisers} />
				</ThemeProvider>
			</div>
		</main>
	);
}

export default Home;
