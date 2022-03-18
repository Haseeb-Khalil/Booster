import React from "react";
import { Container, Box, Grid, Link } from "@material-ui/core";
import { red } from "@mui/material/colors";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import Typography from "@material-ui/core/Typography";
import cyf_brand from "../../assets/cyf_brand.png";


export default function Footer(){

    const accent = red[300];

    return (
			<footer>
				<Box
					px={{ xs: 3, sm: 10 }}
					py={{ xs: 5, sm: 10 }}
					bgcolor={accent}
					color="secondary.main"
				>
					<Container maxWidth="lg">
						<Grid container spacing={5}>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1}>Help</Box>
								<Box>
									<Link href="/" color="inherit">
										Contact
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										Support
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										Privacy
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										CodeYourFuture
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1}>Account</Box>
								<Box>
									<Link href="/" color="inherit">
										Login
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										Register
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1}>Energisers</Box>
								<Box>
									<Link href="/" color="inherit">
										Backup
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										History
									</Link>
								</Box>
								<Box>
									<Link href="/" color="inherit">
										Resources
									</Link>
								</Box>
							</Grid>
						</Grid>
						<Box
							textAlign="center"
							pt={{ xs: 5, sm: 5 }}
							pb={{ xs: 5, sm: 0 }}
						>
							<img className="cyfLogo" src={cyf_brand} alt="cyf_brand" />
						</Box>
						<Box
							textAlign="center"
							pt={{ xs: 1, sm: 1 }}
							pb={{ xs: 5, sm: 0 }}
						>
							<ElectricBoltRoundedIcon sx={{ color: red[150] }} />
							<Typography color="secondary" variant="h6">
								booster &reg; {new Date().getFullYear()}
							</Typography>
						</Box>
					</Container>
				</Box>
			</footer>
		);
}