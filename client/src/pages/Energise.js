import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Theme from "../components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Timer from "../components/Timer";
import { Grid, Box, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import BottomNav from "../components/CardsCarousel/BottomNav";

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
			{energisers
				.filter((energiser) => energiser.id === parseInt(id))
				.map((item) => (
					<Box key={item.id} bgcolor="primary">
						<Grid container>
							<Grid item xs={12}>
								<Grid
									item
									xs={11}
									style={{ display: "flex", gap: "1rem", alignItems: "center" }}
								>
									<Box xs={2} sx={{ ml: "10px", mt: "5px" }}>
										<Timer />
									</Box>
									<Box sx={{ ml: "auto", mr: "auto" }} textAlign="center">
										<Typography variant="h3">{item.title}</Typography>
									</Box>
								</Grid>
								<Box textAlign="center" sx={{ m: 6 }}>
									<img src={item.image} height="480px" alt={item.title} />
								</Box>
								<Box
									textAlign="center"
									sx={{ mr: "auto", ml: "auto", maxWidth: "50em" }}
								>
									<Typography variant="h4">{item.description}</Typography>
								</Box>
								<Divider />
								<Box
									sx={{
										mb: "10em",
										mt: "5em",
										mr: "auto",
										ml: "auto",
										maxWidth: "50em",
									}}
								>
									<Typography variant="h6">
										{item.playing_instructions}
									</Typography>
								</Box>
								<BottomNav />
							</Grid>
						</Grid>
					</Box>
				))}
			<Footer />
		</ThemeProvider>
	);
};

export default Energise;
