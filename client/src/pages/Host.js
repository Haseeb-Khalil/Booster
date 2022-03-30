import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Link, Box, Typography, Grid, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer";
import Vote from "../components/CardsCarousel/Vote";

const Host = () => {
	console.log("Hosting");
	const [game, setGame] = useState();
	const { id } = useParams();
	console.log(id);
	const api = process.env.API_URL || "http://localhost:3100/api";
	useEffect(() => {
		fetch(`${api}/game/${id}`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((gameData) => {
				console.log(gameData);
				setGame(gameData);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	}, [id]);

	return game ? (
		<Box>
			<Header />
			<Box bgcolor="primary">
				<Grid container>
					<Grid item xs={12}>
						<Grid
							item
							xs={11}
							style={{ display: "flex", gap: "1rem", alignItems: "center" }}
						>
							<Box xs={2} sx={{ ml: "10px", mt: "5px" }}>
								<Timer duration={900} remaining={game.secondsLeft} />
							</Box>
							<Box sx={{ ml: "auto", mr: "auto" }} textAlign="center">
								<Typography variant="h3">{game.title}</Typography>
							</Box>
						</Grid>
						<Box textAlign="center" sx={{ m: 6 }}>
							<img src={game.image} height="480px" alt={game.title} />
						</Box>
						<Box
							textAlign="center"
							sx={{ mr: "auto", ml: "auto", maxWidth: "50em" }}
						>
							<Typography variant="h4">{game.description}</Typography>
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
							<Typography variant="h6">{game.playing_instructions}</Typography>
							<Typography variant="h4">{game.code}</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							sx={{ mb: "5em" }}
						>
							<Vote energiser={game} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Box>
	) : (
		<CircularProgress color="success" />
	);
};

export default Host;
