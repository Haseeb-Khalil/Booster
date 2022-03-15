import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";

export function Home() {
	const [message, setMessage] = useState("Loading...");

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<Header />
				<Hero />
			</div>
		</main>
	);
}

export default Home;
