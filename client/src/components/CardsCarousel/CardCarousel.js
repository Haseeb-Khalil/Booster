import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import {
	Button,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
	Grid,
	Container,
} from "@material-ui/core";
import { CardActions } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from "react-router-dom";

// const energisers = [
// 	{
// 		id: 1,
// 		title: "Energiser 1",
// 		description: "Energiser 1 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 2,
// 		title: "Energiser 2",
// 		description: "Energiser 2 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 3,
// 		title: "Energiser 3",
// 		description: "Energiser 3 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 4,
// 		title: "Energiser 4",
// 		description: "Energiser 4 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 5,
// 		title: "Energiser 5",
// 		description: "Energiser 5 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 6,
// 		title: "Energiser 6",
// 		description: "Energiser 6 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// 	{
// 		id: 7,
// 		title: "Energiser 7",
// 		description: "Energiser 7 description",
// 		image: "https://source.unsplash.com/random/400x400",
// 		link: "https://www.google.com",
// 		instructions: "Lorem ipsum",
// 		likes: "100",
// 		dislikes: "10",
// 	},
// ];


function CardCarousel ({energisers}){
	const itemsPerPage = 3;
	const [page, setPage] = React.useState(1);

	const handleChangePage = (event, value) => {
		setPage(value);
	};
	const noLoopNext = (event, value) => {
		setPage((currPage) => {
			if (currPage + 1 > Math.ceil(energisers.length / itemsPerPage)) {
				return currPage;
			} else {
				return currPage + 1;
			}
		});
	};

	const noLoopPrev = (event, value) => {
		setPage((currPage) => {
			if (currPage === 1) {
				return currPage;
			} else {
				return currPage - 1;
			}
		});
	};

	return (
		<Carousel
			autoPlay={false}
			indicators={true}
			onChangePage={handleChangePage}
			next={noLoopNext}
			prev={noLoopPrev}
			sx={{ padding: 5 }}
			navButtonsProps={{
				// Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
				style: {
					backgroundColor: "red",
					borderRadius: 0,
				},
			}}
		>
			<Container maxWidth="lg" component="main">
				<Grid container spacing={5}>
					{energisers
						.slice((page - 1) * itemsPerPage, page * itemsPerPage)
						.map((energiser, index) => (
							<Grid item key={index} xs={4} md={4}>
								<Card>
									<CardMedia
										component="img"
										height="240"
										image={energiser.image}
										alt={energiser.title}
									/>
									{console.log(energiser.image)}
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
										{/* <Button
											variant="outlined"
											href={energiser.link}
											color="primary"
										>
											Select
										</Button> */}
										<Link to={`/energiser/${energiser.id}`} >Select</Link>
										<IconButton aria-label="thumbs-up">
											<ThumbUpOffAltIcon />
											{energiser.likes}
										</IconButton>
										<IconButton aria-label="thumbs-down">
											<ThumbDownOffAltIcon />
											{energiser.dislikes}
										</IconButton>
										<IconButton aria-label="share">
											<ShareIcon />
										</IconButton>
									</CardActions>
								</Card>
							</Grid>
						))}
				</Grid>
			</Container>
		</Carousel>
	);
}

export default CardCarousel;