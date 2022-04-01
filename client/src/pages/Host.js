import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import { Button, Link, Box, Typography, Grid, Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer";
import Vote from "../components/CardsCarousel/Vote";

const Host = ({ onlineCount }) => {
	const [value, setValue] = useState("My copy text");
	const [copied, setCopied] = useState(false);
	const textAreaRef = useRef(null);

	const supervillains = require("supervillains");
	const username = supervillains.random();
	const [game, setGame] = useState();
	const { id } = useParams();
	const api = process.env.API_URL || "/api";
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
			<Box
				sx={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
					backgroundSize: "cover",
				}}
			>
				<Grid
					container
					flexDirection="column"
					alignContent="center"
					alignItems="center"
				>
					<Grid
						container
						item
						xs={12}
						style={{ gap: "1rem" }}
						alignItems="baseline"
					>
						<Grid item xs={2} sx={{ ml: "2em", mt: "5em" }}>
							<Timer duration={900} remaining={game.secondsLeft} />
						</Grid>
						<Grid
							item
							xs={4}
							sx={{ ml: "auto", mr: "auto" }}
							textAlign="center"
						>
							<Typography variant="h3">{game.title}</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography variant="body1" color="secondary" textAlign="left">
								Welcome to the game {username}
							</Typography>
							<Typography variant="body1" color="success.main">
								{onlineCount} - Online Users
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={2}>
						<CopyToClipboard text={game.code} onCopy={() => setCopied(true)}>
							<Button
								variant="contained"
								sx={{ ml: "2em" }}
								onClick={() => setCopied(true)}
							>
								<Typography ref={textAreaRef} color="text" variant="body1">
									{game.code}
								</Typography>
							</Button>
						</CopyToClipboard>
						<Typography color="primary" variant="body2">
							Click to share the game code
						</Typography>
						{copied ? (
							<Typography color="error" variant="body2" textAlign="center">
								copied!
							</Typography>
						) : null}
					</Grid>
					<Grid item xs={4} textAlign="center" sx={{ m: 6 }}>
						<img src={game.image} height="480px" alt={game.title} />
					</Grid>
					<Grid
						item
						xs={4}
						textAlign="center"
						sx={{ mr: "auto", ml: "auto", maxWidth: "50em" }}
					>
						<Typography variant="h4" sx={{ color: "yellow" }}>
							{game.description}
						</Typography>
					</Grid>
					<Divider />
					<Grid
						item
						xs={4}
						sx={{
							mb: "10em",
							mt: "5em",
							mr: "auto",
							ml: "auto",
							maxWidth: "50em",
						}}
					>
						<Typography variant="h4">how to play</Typography>
						<Divider />
						<Typography variant="h6" sx={{ color: "white" }}>
							{game.playing_instructions}
						</Typography>
					</Grid>
					<Grid item xs={3} sx={{ mb: "5em" }}>
						<Vote energiser={game} />
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
