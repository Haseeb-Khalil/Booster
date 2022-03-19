import * as React from "react";
import HeroLayout from "./HeroLayout";
import Typography from "@material-ui/core/Typography";
import Registration from "./Registration";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const backgroundImage ="https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
function Hero(){
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
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={8}
				columns={5}
			>
				<Grid justifyContent="flex-start" item xs={3} md={3}>
					<Typography
						color="inherit"
						align="left"
						variant="h2"
						marked="center"
					>
						Welcome to Booster!
					</Typography>
					<Typography color="primary" align="left" variant="h4">
						Get boosted before your meeting
					</Typography>
					<Typography color="secondary" align="left" variant="h6">
						Booster helps you to boost your energy level before your meeting or class by providing you an energiser with an easy to use interface.
					</Typography>
				</Grid>
				<Grid item xs={2} md={2}>
					<Registration />
				</Grid>
			</Grid>
		</Box>
	</HeroLayout>
);
}

export default Hero;