import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	Button,
	Link,
	Box,
	Typography,
	Grid,
	Divider,
	Zoom,
	Fab,
} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Timer from "../components/Timer";
import Vote from "../components/CardsCarousel/Vote.js";

const Energise = ({ onlineCount }) => {
	const superheroes = require("superheroes");
	const username = superheroes.random();
	const { code } = useParams();
	const [clicked, setClicked] = useState(false);
	const [energiser, setEnergiser] = useState([]);
	const api = process.env.API_URL || "/api";
	useEffect(() => {
		fetch(api + `/game/${code}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setEnergiser(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [code]);

	const handleExpandClick = () => {
		setClicked((prev) => !prev);
	};
	return (
		<Box>
			<Header />
			<Grid
				container
				columns={6}
				flexDirection="column"
				key={energiser.id}
				sx={{
					backgroundImage:
						"url(https://images.unsplash.com/photo-1495366554757-8568e69d7f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
					backgroundSize: "cover",
					pt: "1rem",
					pl: "1rem",
					pr: "1rem",
					mr: "1rem",
				}}
				spacing={1}
			>
				{/* Navigation button, Online Users, Welcome, Timer */}
				<Grid
					item
					container
					flexDirection="row"
					justifyContent="flex-end"
					flexWrap="nowrap"
					sx={{ px: "3em" }}
				>
					<Grid item container flexDirection="column">
						<Grid item>
							<Stack direction="row">
								<Button
									size="small"
									variant="contained"
									startIcon={<HomeIcon />}
								>
									Home
								</Button>
							</Stack>
						</Grid>
						<Grid
							item
							container
							justifyContent="space-between"
							alignItems="baseline"
						>
							<Grid item>
								<Fab
									color="default"
									variant="extended"
									size="small"
									label="Expand"
								>
									<PersonPinIcon onClick={handleExpandClick} color="success" />
								</Fab>
								<Zoom in={clicked}>
									<Typography variant="h6" textAlign="left">
										{onlineCount} Online Users
									</Typography>
								</Zoom>
								<Zoom in={!clicked}>
									<Typography variant="h6" color="text">
										Welcome to the game, {username}
									</Typography>
								</Zoom>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Timer duration={900} remaining={energiser.secondsLeft} />
					</Grid>
				</Grid>
				{/* Energiser Title */}
				<Grid item container flexDirection="column" align="center">
					<Typography variant="h4" sx={{ color: "white" }}>
						{energiser.title}
					</Typography>
				</Grid>
				{/* Image */}
				<Grid item align="center">
					<img
						className="energiser.image"
						src={energiser.image}
						height="380em"
						alt={energiser.title}
					/>
				</Grid>
				{/* Description */}
				<Grid item align="center">
					<Typography variant="h6" sx={{ mr: "50px" }}>
						{energiser.description}
					</Typography>
				</Grid>
				{/* Text */}
				<Grid item align="center">
					<Typography variant="h5" sx={{ color: "yellow", mr: "50px" }}>
						how to play
					</Typography>
					<Divider />
					<Typography variant="h6" sx={{ color: "white", mr: "50px" }}>
						{energiser.playing_instructions}
					</Typography>
				</Grid>
				{/* Vote */}
				<Grid item align="center">
					<Vote energiser={energiser} />
				</Grid>
			</Grid>
			<Footer />
		</Box>
	);
};

export default Energise;
