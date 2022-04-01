import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeroLayout from "./HeroLayout";
import { Button, Link, Box, Typography, TextField, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const backgroundImage =
	"https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function Hero({ scrollToPopularEnergisers }) {
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
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={6} xl={6}>
					<Typography color="error" align="left" variant="h2" marked="center">
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
					<Typography variant="h6" color="info.main">
						Create a game and share the code with your friends
					</Typography>
					<Button variant="contained" color="primary" onClick={handleHost}>
						<Typography variant="buttonFont">start a game</Typography>
					</Button>
				</Grid>
				<Grid
					container
					item
					xs={4}
					xl={6}
					flexDirection="column"
					sx={{ alignItems: "center" }}
				>
					<Grid item md={4}></Grid>
					<Grid item md={4}>
						<Typography
							color="error.main"
							variant="h6"
							textAlign="center"
							sx={{ display: { xs: "none", sm: "flex" } }}
						>
							Get boosted before your meeting
						</Typography>
					</Grid>
					<Grid container item md={4} direction="column" alignItems="center">
						<Grid item xs={6} md={6}>
							<Box py={{ xs: 0.5, md: 3 }}>
								<TextField
									label="Enter the game code"
									variant="outlined"
									type="text"
									color="info"
									size="small"
									// inputProps={{ style: { fontSize: 20 } }} // font size of input text
									// InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
									value={code}
									onChange={(e) => setCode(e.target.value)}
								/>
							</Box>
						</Grid>
						<Grid item xs={6} md={6}>
							<Button
								type="submit"
								variant="contained"
								color="error"
								onClick={handleSubmit}
							>
								<Typography variant="buttonFont">play a game</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Box>
				<Link color="inherit" onClick={scrollToPopularEnergisers}>
					<KeyboardArrowDownIcon
						sx={{ position: "absolute", bottom: 1, textAlign: "center" }}
						fontSize="large"
						onClick={scrollToPopularEnergisers}
					/>
				</Link>
			</Box>
		</HeroLayout>
	);
}

export default Hero;
