import React,{ useState } from "react";
import Card from "@material-ui/core/Card";
import {
	Button,
	CardContent,
	CardMedia,
	Typography,
	Grid,
} from "@material-ui/core";
import { CardActions } from "@mui/material";
import Vote from "../components/CardsCarousel/Vote";
import SearchBar from "../components/SearchBar/SearchBar";
//import SortBar from "../components/SortBar/SortBar";

function Cards({ energisers }) {
	const [search, setSearch] = useState("");
    let filteredEnergisers = energisers.filter((energiser) => {
      return energiser.title.toLowerCase().includes(search.toLowerCase()) || energiser.description.toLowerCase().includes(search.toLowerCase());
    });

	return (
		<>
		<SearchBar search={search} setSearch={setSearch} />
		{/* <SortBar energisers={energisers} /> */}
			<Grid component="main">
				<Grid container spacing={5}>
					{filteredEnergisers
						//.slice((page - 1) * itemsPerPage, page * itemsPerPage)
						.map((energiser, index) => (
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
											color="primary"
										>
											Select
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