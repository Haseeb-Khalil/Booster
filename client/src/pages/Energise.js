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
import Timer from "../components/Timer";
import Vote from "../components/CardsCarousel/Vote.js";

const Energise = ({ onlineCount }) => {
	console.log(onlineCount);
	const { code } = useParams();
	const [clicked, setClicked] = useState(false);
	const [energiser, setEnergiser] = useState([]);
	const api = process.env.API_URL || "/api";
	useEffect(() => {
		console.log("Energise");
		fetch(api + `/game/${code}`)
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setEnergiser(data);
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [code]);

	const handleExpandClick = () => {
		setClicked((prev) => !prev);
	};
	return (
		<>
			<Header />
			<Box
				key={energiser.id}
				bgcolor="primary"
				sx={{ ml: "10px", mt: "200px" }}
			>
				<Box sx={{ ml: "3%", mr: "auto", mt: "10px" }}>
					<Fab color="primary" variant="extended" size="medium" label="Expand">
						<PersonPinIcon
							onClick={handleExpandClick}
							color="success"
							fontSize="150px"
						/>
					</Fab>
				</Box>
				<Box sx={{ ml: "0%", mr: "90%", mt: "10px" }}>
					<Zoom in={clicked}>
						<Typography variant="h5" textAlign="center">
							Online - {onlineCount}
						</Typography>
					</Zoom>
				</Box>

				<Box sx={{ ml: "45%", mr: "50%", mt: "10px" }}>
					<Timer duration={900} remaining={energiser.secondsLeft} />
				</Box>

				<Grid container direction="column" alignItems="center">
					<Grid item xs={1} md={4}></Grid>
					<Grid
						item
						xs={8}
						md={8}
						style={{ display: "flex", gap: "1rem", alignItems: "center" }}
					>
						<Box sx={{ ml: "auto", mr: "auto" }} textAlign="center">
							<Typography variant="h3">{energiser.title}</Typography>
						</Box>
					</Grid>
					<Box textAlign="center" sx={{ m: 6 }}>
						<img src={energiser.image} height="480px" alt={energiser.title} />
					</Box>
					<Box
						textAlign="center"
						sx={{ mr: "auto", ml: "auto", maxWidth: "50em" }}
					>
						<Typography variant="h4">{energiser.description}</Typography>
					</Box>
					<Divider />
					<Box
						sx={{
							mb: "5em",
							mt: "5em",
							mr: "auto",
							ml: "auto",
							maxWidth: "50em",
						}}
					>
						<Typography variant="h6">
							{energiser.playing_instructions}
						</Typography>
					</Box>
					<Box display="flex" justifyContent="center" alignItems="center">
						<Vote energiser={energiser} />
					</Box>
				</Grid>
			</Box>
			<Footer />
		</>
	);
};

export default Energise;
