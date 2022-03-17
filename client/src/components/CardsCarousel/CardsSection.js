import React from "react";
import CardCarousel from "./CardCarousel";
import Typography from "@material-ui/core/Typography";
import Container from "@mui/material/Container";

function CardsSection ({energisers}){
    return (
			<Container maxWidth="l" sx={{ bgcolor: "#DDEE14", padding: 5 }}>
				<Typography variant="h4" color="primary" align="center">
					Chose your favourite energiser and start boosted
				</Typography>
				<CardCarousel energisers={energisers}/>
			</Container>
		);
}

export default CardsSection;