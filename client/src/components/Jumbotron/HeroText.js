import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function HeroText() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Grid item xs={12} sm={8} md={5} elevation={6}>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Discover the experience
				</Typography>
				<Typography component="h1" variant="h5">
					Create a game and share the code with your friends
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						color="primary"
					>
						Create a game
					</Button>
				</Box>
			</Box>
		</Grid>
	);
}

export default HeroText;