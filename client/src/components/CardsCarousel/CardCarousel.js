import React, { useState, useEffect } from "react";
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

function CardCarousel() {
	const [energisers, setEnergisers] = useState([]);
	const api = "http://localhost:3100/api";

	useEffect(() => {
		fetch(api + "/energisers")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setEnergisers(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

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
			sx={{ overflow:"visible", padding: 5 }}
			navButtonsProps={{
				style: {
					backgroundColor: "red",
					borderRadius: 0,
				},
			}}
		>
			<Grid component="main">
				<Grid container spacing={5}>
					{energisers
						.slice((page - 1) * itemsPerPage, page * itemsPerPage)
						.map((energiser, index) => (
							<Grid item key={index} xs={4} md={4}>
								<Card>
									<CardMedia
										component="img"
										height="240px"
										image="https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
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
			</Grid>
		</Carousel>
	);
}

export default CardCarousel;