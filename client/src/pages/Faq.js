import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
	Box,
	Typography,
	Divider,
	Zoom,
	Fab,
} from "@mui/material";

const Faq = () => {
	let faq = [
		{
			id: 1,
			question: "How to select an Energiser?",
			answer:
				"Click the host button, then it will show the list of energisers. Select one which you like. It will show the random generated code. Copy that code and share with your friends.",
		},
		{
			id: 2,
			question: "How to join as a user?",
			answer:
				" Click the user button, it will ask the code. Paste the code which your host shared with you. Click the join button, It will take the exact energiser which your host chose.",
		},
		{
			id: 3,
			question: "Can I see the popular Energisers?",
			answer: "Yes, you can see that on the main page.",
		},
		{
			id: 4,
			question: "Can I change the energiser once I selected?",
			answer: "Yes, you can go back and select another one.",
		},
	];
	const [clicked, setClicked] = useState(false);
	const handleExpandClick = () => {
		setClicked((prev) => !prev);
	};

	return (
		<div>
			<Header />
			<Typography variant="h4" align="center" >
				FAQ
			</Typography>
			{faq.map((item) => {
				return (
					<Box key={item.id} onClick={handleExpandClick}>
						<Fab
							color="default"
							variant="extended"
							size="small"
							label="Expand"
							sx={{ ml: "40%", px: "2em", my: "2em" }}
						>
							<Typography variant="h6">{item.question}</Typography>
						</Fab>
						<Zoom in={clicked}>
							<Typography variant="h6" textAlign="center">
								{item.answer}
							</Typography>
						</Zoom>
						<Divider />
					</Box>
				);
			})}
			<Footer />
		</div>
	);
};

export default Faq;
