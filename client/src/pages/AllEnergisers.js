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


function AllEnergisers({ energisers, setEnergisers }) {

	const [search, setSearch] = useState("");
    let filteredEnergisers = energisers.filter((energiser) => {
      return energiser.title.toLowerCase().includes(search.toLowerCase()) || energiser.description.toLowerCase().includes(search.toLowerCase());
    });

	const sortArray = (type) => {
		const types = {
		none: "none",
		alpha: "alpha",
		popular: "popular",
		};

		// console.log(typeof types[type]);
		if(types[type] == "alpha") {
			const sorted = [...filteredEnergisers].sort((a, b) => a.title == b.title ? 0 : a.title < b.title ? -1 : 1);
			console.log(sorted);
			setEnergisers(sorted);
		} else if(types[type] == "popular") {
			const sorted = [...filteredEnergisers].sort((a, b) => a.likes == b.likes ? 0 : a.likes > b.likes ? -1 : 1);
			console.log(sorted);
			setEnergisers(sorted);
		} else if(types[type] == "none") {
			const sorted = [...filteredEnergisers].sort((a, b) => a.id == b.id ? 0 : a.id < b.id ? -1 : 1);
			console.log(sorted);
			setEnergisers(sorted);
		}
	};

	return (
		<>
		<select onChange={(e) => sortArray(e.target.value)}>
				<option value="none">none</option>
				<option value="alpha">alpha</option>
				<option value="popular">popular</option>
		</select>
		<SearchBar search={search} setSearch={setSearch} />

			<Grid component="main">
				<Grid container spacing={5}>
					{filteredEnergisers
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

export default AllEnergisers;