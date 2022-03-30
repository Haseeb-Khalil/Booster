import { useState } from "react";
import { IconButton, Box } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@material-ui/icons/Share";

const Vote = ({ energiser }) => {
	let energiserId = energiser.id;
	const [voteUp, setVoteUp] = useState(energiser.likes);
	const [voteDown, setVoteDown] = useState(energiser.dislikes);

	const api = process.env.API_URL || "/api";
	const likeBtn = () => {
		fetch(`${api}/energiser/${energiserId}/like`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setVoteUp(data[0].likes);
			})
			.catch((err) => console.log(err));
	};

	const dislikeBtn = () => {
		fetch(`${api}/energiser/${energiserId}/dislike`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setVoteDown(data[0].dislikes);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Box sx={{ display: { sm: "none", md: "flex" } }}>
			<IconButton aria-label="thumbs-up" onClick={() => likeBtn()}>
				<ThumbUpOffAltIcon />
				{voteUp}
			</IconButton>
			<IconButton aria-label="thumbs-down" onClick={() => dislikeBtn()}>
				<ThumbDownOffAltIcon />
				{voteDown}
			</IconButton>
			<IconButton aria-label="share">
				<ShareIcon />
			</IconButton>
		</Box>
	);
};

export default Vote;
