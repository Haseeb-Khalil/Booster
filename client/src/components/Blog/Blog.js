import {
	Box,
	Grid,
	Paper,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Button,
} from "@mui/material";
import React from "react";



function Blog (){
    return (
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 8 }}
				bgcolor="error.main"
				color="error.contrastText"
			>
				<Typography py={{ xs: 1, sm: 5 }} variant="h4" textAlign="center">
					How does booster work?
				</Typography>
				<Grid container spacing={20} justifyContent="space-evenly">
					<Grid item xs={6} md={4}>
						<Card sx={{ display: "flex" }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									// bgcolor: "secondary.main",
								}}
							>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography component="div" variant="h5">
										Host a live energiser
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										Host a live game and share the game code with remote
										players.
									</Typography>
								</CardContent>
								<Box
									sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
								></Box>
							</Box>
							<CardMedia
								component="img"
								sx={{ width: 151 }}
								image="https://media3.giphy.com/media/WrIhOdKOXixVBQ4rvZ/giphy.gif?cid=790b7611b7e59a6a08fe24cfdecf60e343fce59ad10bea1c&rid=giphy.gif&ct=s"
								alt="Live from space album cover"
							/>
						</Card>
					</Grid>
					<Grid item xs={6} md={4}>
						<Card sx={{ display: "flex" }}>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography component="div" variant="h5">
										Join an energiser
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										Join a booster with a PIN provided by the host.
									</Typography>
								</CardContent>
								<Box
									sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
								></Box>
							</Box>
							<CardMedia
								component="img"
								sx={{ width: 151 }}
								image="https://media2.giphy.com/media/FcAXYHvaRRA35Dh5vG/giphy.gif?cid=790b7611a35ab2508ca946b2e1df9e31007e09507b15a3cb&rid=giphy.gif&ct=ts"
								alt="Live from space album cover"
							/>
						</Card>
					</Grid>
					<Grid item xs={6} md={4}>
						<Card sx={{ display: "flex" }}>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography component="div" variant="h5">
										Read the rules
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										Read the rules and learn how to play. You can also read the
										FAQ for more information.
									</Typography>
								</CardContent>
								<Box
									sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
								></Box>
							</Box>
							<CardMedia
								component="img"
								sx={{ width: 151 }}
								image="https://media0.giphy.com/media/wZVIJMIrrxqyqXK1rF/giphy.gif?cid=ecf05e47ihi4xo8fzneftev08ibqfbr05v3nk6a9339etbkj&rid=giphy.gif&ct=s"
								alt="Live from space album cover"
							/>
						</Card>
					</Grid>
					<Grid item xs={6} md={4}>
						<Card sx={{ display: "flex" }}>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography component="div" variant="h5">
										Check the time
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
									>
										Every booster has a timer. It is set to 15 minutes.
									</Typography>
								</CardContent>
								<Box
									sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
								></Box>
							</Box>
							<CardMedia
								component="img"
								sx={{ width: 151 }}
								image="https://media1.giphy.com/media/Y67xH7vCUTfOMalD16/giphy.gif?cid=790b7611fcee3fd7355dc6c6dd4a7530dc0a7cc0a983b471&rid=giphy.gif&ct=s"
								alt="Live from space album cover"
							/>
						</Card>
					</Grid>
				</Grid>
			</Box>
		);
}

export default Blog;