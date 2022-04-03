import React,{ useState } from "react";
import { Button, Link, Box, Typography, Grid } from "@mui/material";
import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	OutlinedInput,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Vote from "../components/CardsCarousel/Vote";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
		<Box sx={{ pt: "4%" }}>
			<Header />
			<Grid container sx={{ pl: "20px" }}>
				<HomeIcon color="success" fontSize="small" />
				<Link href="/">
					<Typography variant="body2">Home</Typography>
				</Link>
				<ArrowBackIosNewIcon color="success" fontSize="small" />
				<Link href="/energisers">
					<Typography variant="body2">Energisers</Typography>
				</Link>
			</Grid>
			<Typography variant="h4" gutterBottom textAlign="center" color="primary">
				Discover the experience
			</Typography>
			<Grid container sx={{ my: "1%" }}>
				<Box sx={{ my: "1%" }}>
					<FormControl sx={{ px: "1%", width: 300 }}>
						<InputLabel id="sort-by-label">Sort by</InputLabel>
						<Select
							labelId="sort-by-label"
							id="sort-by"
							input={
								<OutlinedInput labelWidth={60} name="sort-by" id="sort-by" />
							}
							onChange={(e) => sortArray(e.target.value)}
						>
							<MenuItem value="none">None</MenuItem>
							<MenuItem value="alpha">Alphabetical</MenuItem>
							<MenuItem value="popular">Most Popular</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box sx={{ my: "1%" }}>
					<SearchBar search={search} setSearch={setSearch} />
				</Box>
				<Box component="main" sx={{ m: "1%" }}>
					<Grid container spacing={5}>
						{filteredEnergisers.map((energiser, index) => (
							<Grid item key={index} xs={4} md={4}>
								<Card>
									<CardMedia
										component="img"
										height="400em"
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
				</Box>
			</Grid>
			<Footer />
		</Box>
	);
}

export default AllEnergisers;