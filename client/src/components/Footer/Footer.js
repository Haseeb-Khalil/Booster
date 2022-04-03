import React from "react";
import { Link, Box, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { red, grey } from "@mui/material/colors";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";

export default function Footer() {
	const navigate = useNavigate();
	const handleHost = (e) => {
		e.preventDefault();
		navigate("/faq");
	};

	return (
		<footer>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				sx={{ bgcolor: grey[100], color: "error.main" }}
			>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h6" color="text">
									Help
								</Typography>
							</Box>
							<Box>
								<Link
									href="/"
									variant="h6"
									underline="none"
									color="text.primary"
								>
									<Typography variant="body1" onClick={handleHost}>
										faq
									</Typography>
								</Link>
							</Box>
							<Box>
								<Link
									href="/"
									color="text.primary"
									variant="h6"
									underline="none"
								>
									<Typography variant="body1">privacy</Typography>
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1} variant="h6">
								<Typography variant="h6" color="neutral">
									Start
								</Typography>
							</Box>
							<Box>
								<Link
									href="/"
									color="text.primary"
									variant="h6"
									underline="none"
								>
									<Typography variant="body1">host a game</Typography>
								</Link>
							</Box>
							<Box>
								<Link
									href="/"
									color="text.primary"
									variant="h6"
									underline="none"
								>
									<Typography variant="body1">join</Typography>
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h6" color="neutral">
									About
								</Typography>
							</Box>
							<Box>
								<Link
									href="/"
									color="text.primary"
									variant="h6"
									underline="none"
								>
									<Typography variant="body1">team</Typography>
								</Link>
							</Box>
							<Box>
								<Link
									href="/"
									color="text.primary"
									variant="h6"
									underline="none"
								>
									<Typography variant="body1">github</Typography>
								</Link>
							</Box>
						</Grid>
					</Grid>
					<Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
						<ElectricBoltRoundedIcon
							sx={{ color: red[800] }}
							fontSize="large"
						/>
						<Box>
							<Link href="./" underline="none" sx={{ color: red[800] }}>
								<Typography variant="h4">
									booster &reg; {new Date().getFullYear()}
								</Typography>
							</Link>
						</Box>
					</Box>
					<Box textAlign="center">
						<Typography variant="h6" color="secondary">
							Efortless Energiser
						</Typography>
					</Box>
				</Container>
			</Box>
		</footer>
	);
}
