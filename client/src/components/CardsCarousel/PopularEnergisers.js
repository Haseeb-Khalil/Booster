import React, { useState, useEffect } from "react";
import { Button, Link, Box, Typography, Grid } from "@mui/material";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";

import Vote from "./Vote";
import { EffectCoverflow , Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
		<>
			<Grid
				sx={{ pb: 10 }}
				style={{
					backgroundColor: "whitesmoke",
				}}
			>
				<Box sx={{ height: "40em", bgcolor: "whitesmoke", padding: 5 }}>
					<Box sx={{ mb: 5 }}>
						<Typography variant="h5" color="secondary" align="center">
							Swipe to see our most popular energisers
						</Typography>
					</Box>
					<Box>
						{" "}
						<Swiper
							className="container favourites__container"
							effect={"coverflow"}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={"auto"}
							coverflowEffect={{
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							}}
							pagination={true}
							navigation={true}
							modules={[EffectCoverflow, Navigation, Pagination]}
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
													sx={{ display: { xs: "block", md: "flex" } }}
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="h2">
														{energiser.title}
													</Typography>
													<Typography
														variant="body1"
														color="primary"
														component="p"
														sx={{
															display: { xs: "none", sm: "none", md: "flex" },
															transitionDuration: "0.3s",
															height: "5vw",
														}}
													>
														{energiser.description}
													</Typography>
												</CardContent>
												<CardActions disableSpacing className="actions">
													<Button
														variant="outlined"
														href={`/energiser/${energiser.id}`}
														color="secondary"
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
