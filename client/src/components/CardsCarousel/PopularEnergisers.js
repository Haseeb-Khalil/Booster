import React, { useState, useEffect } from "react";
import { Button, Link, Box, Typography, Grid } from "@mui/material";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";

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

	return (
		<Box sx={{ pb: 10 }}>
			<Box sx={{ m: 5 }}>
				<Typography variant="h5" color="primary" align="center">
					Swipe to see our most popular energisers
				</Typography>
			</Box>
			<Box>
				<Swiper
					className="container favourites__container"
					// install Swiper modules
					modules={[Navigation, Pagination]}
					spaceBetween={10}
					slidesPerView={3}
					navigation
					pagination={{ clickable: true }}
					sx={{ slidesPerView: { xs: "1" } }}
				>
					<Grid component="main">
						{popular.map((energiser, index) => {
							return (
								<SwiperSlide key={index} className="favourites">
									<Card>
										<CardMedia
											component="img"
											height="400em"
											image={energiser.image}
											alt={energiser.title}
											sx={{ display: { xs: "block", md: "flex" } }}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h6"
												textAlign="center"
												color="error"
											>
												{energiser.title}
											</Typography>
											<Typography
												variant="body1"
												color="textSecondary"
												sx={{
													display: { xs: "none", sm: "none", md: "flex" },
													transitionDuration: "0.3s",
													height: "5vw",
												}}
											>
												{energiser.description}
											</Typography>
										</CardContent>
										<CardActions disableSpacing>
											<Button
												variant="contained"
												href={`/energiser/${energiser.id}`}
												color="primary"
											>
												<Typography variant="buttonFont">host now</Typography>
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
	);
}

export default PopularEnergisers;
