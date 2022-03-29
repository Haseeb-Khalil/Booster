import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import {
	Button,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Box,
} from "@material-ui/core";
import { CardActions } from "@mui/material";
import Vote from "./Vote";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PopularEnergisers() {
	const [popular, setPopular] = useState([]);
	const api = process.env.API_URL || "/api";
	useEffect(() => {
		fetch(api + "/energisers/popular")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((data) => {
				setPopular(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const cardStyle = {
		display: "block",
		transitionDuration: "0.3s",
		height: "4vw",
	};
	return (
		<>
			<Grid sx={{ pb: 40, bgcolor: "#DDEE14" }}>
				<Box sx={{ height: "40em", bgcolor: "#DDEE14", padding: 5 }}>
					<Box sx={{ mb: 5 }}>
						<Typography variant="h5" color="primary" align="center">
							Swipe to see our most popular energisers
						</Typography>
					</Box>
					<Box>
						{" "}
						<Swiper
							className="container favourites__container"
							// install Swiper modules
							modules={[Navigation, Pagination]}
							spaceBetween={10}
							slidesPerView={3}
							navigation
							pagination={{ clickable: true }}
						>
							<Grid component="main">
								{popular.map((energiser, index) => {
									return (
										<SwiperSlide key={index} className="favourites">
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
														style={cardStyle}
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
														Host now
													</Button>
													<Vote energiser={energiser} />
												</CardActions>
											</Card>
										</SwiperSlide>
									);
								})}
							</Grid>
						</Swiper>
					</Box>
				</Box>
			</Grid>
		</>
	);
}

export default PopularEnergisers;
