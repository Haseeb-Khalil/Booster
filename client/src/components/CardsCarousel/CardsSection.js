import React from "react";
import CardCarousel from "./CardCarousel";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";

function CardsSection() {

	return (
		<Box sx={{ height: "40em", bgcolor: "#DDEE14", padding: 5 }}>
			<Typography variant="h4" color="primary" align="center">
				Pick your favourite energiser and start boosted
			</Typography>
			<CardCarousel />
		</Box>
	);
}

export default CardsSection;