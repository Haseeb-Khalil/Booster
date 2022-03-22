import React from "react";
// import CardCarousel from "./CardCarousel";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import PopularEnergisers from "./PopularEnergisers"

function CardsSection() {

	return (
		<Grid sx={{ pb:40, bgcolor: "#DDEE14" }}>
			<Box sx={{ height: "40em", bgcolor: "#DDEE14", padding: 5 }}>
				<Box sx={{ mb: 5 }}>
					<Typography variant="h4" color="primary" align="center">
						Pick your favourite energiser and get boosted
					</Typography>
				</Box>
				<Box>
					<PopularEnergisers />
				</Box>
				{/* <Box>
					<CardCarousel />
				</Box> */}
			</Box>
		</Grid>
	);
}

export default CardsSection;