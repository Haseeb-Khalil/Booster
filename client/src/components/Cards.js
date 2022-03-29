import React, { useState } from "react";
import { Button, Link, Box, Typography, Grid } from "@mui/material";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";

import Vote from "../components/CardsCarousel/Vote";
import SearchBar from "../components/SearchBar/SearchBar";
import { red } from "@mui/material/colors";

function Cards({ listEnergisers }) {
	const [search, setSearch] = useState("");
	let filteredEnergisers = listEnergisers.filter((energiser) => {
		return (
			energiser.title.toLowerCase().includes(search.toLowerCase()) ||
			energiser.description.toLowerCase().includes(search.toLowerCase())
		);
	});
	return (
		<>
			<Grid component="main">
				<SearchBar search={search} setSearch={setSearch} sx={{ mb: "10px" }} />
				<Grid container spacing={5}>
					{filteredEnergisers.map((energiser, index) => (
						<Grid item key={index} xs={4} md={4}>
							<Card>
								<CardMedia
									component="img"
									height="240px"
									image={energiser.image}
									alt={energiser.title}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{energiser.title}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										{energiser.description}
									</Typography>
								</CardContent>
								<CardActions disableSpacing>
									<Button
										variant="outlined"
										href={`/energiser/${energiser.id}`}
										sx={{ color: red[800] }}
									>
										Host now
									</Button>
									<Vote energiser={energiser} />
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
}

export default Cards;
