import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroLayout from "./HeroLayout";
import { Button, Box, Typography, TextField, Grid } from "@mui/material";

const backgroundImage =
	"https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function Hero() {
	const navigate = useNavigate();
	const [code, setCode] = useState("");
	const handleClose = (code) => {
		if (code) {
			navigate(`/game/${code}`);
		}
	};
	const handleHost = (e) => {
		e.preventDefault();
		navigate("/energisers");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleClose(code);
	};

	return (
		<HeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: "#7fc7d9",
				backgroundPosition: "center",
			}}
		>
			<img
				style={{ display: "none" }}
				src={backgroundImage}
				alt="increase priority"
			/>
			<Grid
				container
				flex-wrap="wrap"
				columns={12}
				direction="row"
				justifyContent="space-evenly"
				alignItems="center"
			>
				<Grid item xs={2} xl={2}></Grid>
				<Grid sx={{ ml: "0", pl: "0" }} item xs={2} xl={4}>
					<Typography color="primary" align="left" variant="h2" marked="center">
						Welcome to booster!
					</Typography>
					<Typography
						color="neutral"
						align="left"
						variant="h5"
						sx={{ display: { xs: "none", md: "flex" } }}
					>
						Booster helps you to boost your energy level before your meeting or
						class by providing you an energiser with an easy to use interface.
					</Typography>
					<Typography variant="h6" color="secondary">
						Create a game and share the code with your friends
					</Typography>
					<Button variant="contained" color="secondary" onClick={handleHost}>
						create a game
					</Button>
				</Grid>
				<Grid item xs={2} xl={1}></Grid>
				<Grid container item xs={1} xl={4} flexDirection="column">
					<Grid item md={4}></Grid>
					<Grid item md={4}>
						<Typography
							color="secondary"
							variant="h6"
							textAlign="center"
							sx={{ display: { xs: "none", md: "flex" } }}
						>
							Get boosted before your meeting
						</Typography>
					</Grid>
					<Grid container item md={4} direction="column" alignItems="center">
						<Grid item xs={6} md={6}>
							<Box>
								<TextField
									label="Game Code"
									variant="outlined"
									type="text"
									color="secondary"
									value={code}
									onChange={(e) => setCode(e.target.value)}
								/>
							</Box>
						</Grid>
						<Grid item xs={6} md={6}>
							<Button
								type="submit"
								variant="contained"
								color="secondary"
								onClick={handleSubmit}
							>
								join a game
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</HeroLayout>
	);
}

export default Hero;
