import React from "react";
import { Container, Box, Grid, Link } from "@material-ui/core";
import { red } from "@mui/material/colors";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
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
								<Box>
									<Link href="/https://codeyourfuture.io/">
										<img className="cyfLogo" src={cyf_brand} alt="cyf_brand" />
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box borderBottom={1} variant="h6">Account</Box>
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
								<Box borderBottom={1}>Github</Box>
								<Box>
									<Link href="/" color="inherit" variant="h6">
										Team
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
					</Container>
				</Box>
			</footer>
		);
}