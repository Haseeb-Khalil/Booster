import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Timer from "../components/Timer";
import Vote from "../components/CardsCarousel/Vote.js";
import { Grid, Box, Typography } from "@material-ui/core";
import Divider from "@mui/material/Divider";

const Host = () => {
	console.log("Hosting");
	const { id } = useParams();
	console.log(id);
	const [energiser, setEnergiser] = useState();
	const [energiserId, setEnergiserId] = useState(id);

    useEffect(() => {
        fetch(`http://localhost:3100/api/energiser/${id}`)
		.then((res) => {
			console.log(res);
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			res.json();
		})
			.then((data) => {
				setEnergiserId(data.id);
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			});
    }, [id]);


    useEffect(() => {
        fetch(`http://localhost:3100/api/game/${energiserId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response);
                setEnergiser(response.rows[0]);
                // window.location.reload(true); // Refreshes the page
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
}, [energiserId]);

	return energiser ? (
		<Box>
			<Header />
			<Box key={energiser.id} bgcolor="primary">
				<Grid container>
					<Grid item xs={12}>
						<Grid
							item
							xs={11}
							style={{ display: "flex", gap: "1rem", alignItems: "center" }}
						>
							<Box xs={2} sx={{ ml: "10px", mt: "5px" }}>
								<Timer duration={900} remaining={900} />
							</Box>
							<Box sx={{ ml: "auto", mr: "auto" }} textAlign="center">
								<Typography variant="h3">{energiser.title}</Typography>
							</Box>
						</Grid>
						<Box textAlign="center" sx={{ m: 6 }}>
							<img src={energiser.image} height="480px" alt={energiser.title} />
						</Box>
						<Box
							textAlign="center"
							sx={{ mr: "auto", ml: "auto", maxWidth: "50em" }}
						>
							<Typography variant="h4">{energiser.description}</Typography>
						</Box>
						<Divider />
						<Box
							sx={{
								mb: "10em",
								mt: "5em",
								mr: "auto",
								ml: "auto",
								maxWidth: "50em",
							}}
						>
							<Typography variant="h6">
								{energiser.playing_instructions}
							</Typography>
						</Box>
						<Vote energiser={energiser} />
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Box>
	) : (
		<div>Loading...</div>
    );
};

export default Host;
