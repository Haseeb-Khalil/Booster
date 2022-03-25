import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer";
import { Grid, Box, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import BottomNav from "../components/CardsCarousel/BottomNav";


const Host = () => {
	console.log("Hosting");
	const [game, setGame] = useState();
	
	const {id} = useParams();
	console.log(id);

	// let newGame = {
	// 	title: title,
	// 	description: description,
	// 	playing_instructions: playing_instructions,
	// 	link: link,
	// 	likes: likes,
	// 	dislikes: dislikes,
	// 	image: image,
	// 	secondsLeft: secondsLeft,
	// 	code: code
	// };

	useEffect(() => {
		console.log("in useEffect");
		fetch(`http://localhost:3100/api/game/${id}`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},

			//  body: JSON.stringify(newGame),
		}).then((response) => {
				return response.json();
		}).then(gameData => {
				console.log(gameData);
				setGame(gameData);
				// console.log(game);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	}, [id]);

	return (
		<>
			<Header />
			{game ? (
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
							<Typography variant="h6">
								{game.playing_instructions}
							</Typography>
							<Typography variant="h6">
								Share-Code: {game.code}
							</Typography>
						</Box>
						<BottomNav />
					</Grid>
				</Grid>
			</Box>
			) : (<p>Loading</p>)
			}
			<Footer />
		</>
	);
};

export default Host;
