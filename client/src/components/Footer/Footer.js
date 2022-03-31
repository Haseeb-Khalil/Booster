import React from "react";
import { Link, Box, Typography, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { red } from "@mui/material/colors";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";

export default function Footer() {
	const navigate = useNavigate();
	const handleHost = (e) => {
		e.preventDefault();
		navigate("/faq");
	};

	return (
		<footer>
			<Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="primary">
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h6" color="secondary">
									Help
								</Typography>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									<Typography variant="body1" color="secondary" onClick={handleHost}>
										faq
									</Typography>
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									<Typography variant="body1" color="secondary">
										privacy
									</Typography>
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1} variant="h6">
								<Typography variant="h6" color="secondary">
									Start
								</Typography>
							</Box>
							<Box>
								<Typography variant="body1" color="secondary">
									host a game
								</Typography>
							</Box>
							<Box>
								<Typography variant="body1" color="secondary">
									join
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>
								<Typography variant="h6" color="secondary">
									About
								</Typography>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									<Typography variant="body1" color="secondary">
										team
									</Typography>
								</Link>
							</Box>
							<Box>
								<Link href="/" color="inherit" variant="h6">
									<Typography variant="body1" color="secondary">
										github
									</Typography>
								</Link>
							</Box>
						</Grid>
					</Grid>
					<Box textAlign="center" pt={{ xs: 1, sm: 1 }} pb={{ xs: 5, sm: 0 }}>
						<ElectricBoltRoundedIcon
							sx={{ color: red[800] }}
							fontSize="large"
						/>
						<Box>
							<Link href="./" underline="none" sx={{ color: red[800] }}>
								booster &reg; {new Date().getFullYear()}
							</Link>
						</Box>
					</Box>
					<Box textAlign="center">
						<Typography variant="h5" color="secondary">
							Efortless Energiser
						</Typography>
					</Box>
				</Container>
			</Box>
		</footer>
	);
}
