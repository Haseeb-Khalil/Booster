import { useState } from "react";
import { IconButton } from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@material-ui/icons/Share";
const Vote = ({ energiser }) => {
	let energiserId = energiser.id;
	// console.log(energiser);
	const [voteUp, setVoteUp] = useState(energiser.likes);
	const [voteDown, setVoteDown] = useState(energiser.dislikes);

	const likeBtn = () => {
		fetch(`http://localhost:3100/api/energiser/${energiserId}/like`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				//   console.log(data[0].likes);
				setVoteUp(data[0].likes);
			})
			.catch((err) => console.log(err));
	};

	const dislikeBtn = () => {
		fetch(`http://localhost:3100/api/energiser/${energiserId}/dislike`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				//   console.log(data[0].dislikes);
				setVoteDown(data[0].dislikes);
			})
			.catch((err) => console.log(err));
	};

	return (
		<section>
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
		</section>
	);
};

export default Vote;
