import React from "react";
import { Container, Box, Grid, Link, Typography } from "@material-ui/core";
import { red } from "@mui/material/colors";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";

export default function Footer(){
    return (
			<footer>
				<Box
					px={{ xs: 3, sm: 10 }}
					py={{ xs: 5, sm: 10 }}
					bgcolor="primary.main"
					color="secondary.main"
				>
					<Container maxWidth="lg">
						<Grid container spacing={5}>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1}>Help</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Contact
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Support
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Privacy
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1} variant="h6">
									Account
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Login
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Register
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1}>Energisers</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Backup
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										History
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Resources
									</Link>
								</Box>
							</Grid>
						</Grid>
						<Box textAlign="center" pt={{ xs: 1, sm: 1 }} pb={{ xs: 5, sm: 0 }}>
							<ElectricBoltRoundedIcon
								sx={{ color: red[150] }}
								fontSize="large"
							/>
							<Link color="secondary" variant="h4" href="./" underline="none">
								booster &reg; {new Date().getFullYear()}
							</Link>
						</Box>
						<Box textAlign="center">
							<Typography >Efortless Energiser</Typography>
						</Box>
					</Container>
				</Box>
			</footer>
		);
}