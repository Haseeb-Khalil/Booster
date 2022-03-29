import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer";
import { Grid, Box, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import Vote from "../components/CardsCarousel/Vote.js";

const Energise = ({ onlineCount }) => {
	const { code } = useParams();
	console.log(code);
	const [energiser, setEnergiser] = useState([]);
	const api = "http://localhost:3100/api";

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

	return (
		<>
			<Header />
			<h3>{onlineCount} - Users are Online</h3>
			<Box key={energiser.id} bgcolor="primary">
				<Grid container>
					<Grid item xs={12}>
						<Grid
							item
							xs={11}
							style={{ display: "flex", gap: "1rem", alignItems: "center" }}
						>
							<Box xs={2} sx={{ ml: "10px", mt: "5px" }}>
								<Timer duration={900} remaining={energiser.secondsLeft} />
							</Box>
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
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
						>
							<Vote energiser={energiser} />
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</>
	);
};

export default Energise;
