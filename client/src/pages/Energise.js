import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Theme from "../components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Timer from "../components/Timer";
import { Grid, Box, Typography } from "@material-ui/core";

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
				setEnergisers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<ThemeProvider theme={Theme}>
			<Header />
			<Grid>
				<Timer />
				{console.log(energisers)}
				{energisers
					.filter((energiser) => energiser.id === parseInt(id))
					.map((item) => (
						<Grid key={item.id}>
							{console.log(item)}
							<Box>
								<Typography variant="h4">{item.title}</Typography>
							</Box>
							<Box>
								<img
									src={item.image}
									height="480px"
									alt={item.title}
								/>
							</Box>

							<Box>
								<Typography variant="h6">{item.description}</Typography>
							</Box>
							<Box>
								<Typography variant="body">
									{item.playing_instructions}
								</Typography>
							</Box>
						</Grid>
					))}
			</Grid>
			<Footer />
		</ThemeProvider>
	);
};

export default Energise;
