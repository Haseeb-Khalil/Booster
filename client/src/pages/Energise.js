import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Theme from "../components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Timer from "../components/Timer";

const Energise = () => {
	const { id } = useParams();
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
				console.log(data);
				setEnergisers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<ThemeProvider theme={Theme}>
			<div>
				<Header />
				{energisers
					.filter((energiser) => energiser.id === id)
					.map((energiser) => (
						<div key={energiser.id}>
							<h1>{energiser.title}</h1>
							<p>{energiser.description}</p>
							<p>{energiser.link}</p>
						</div>
					))}
				<Timer />
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default Energise;
