import { useState } from "react";
import { IconButton } from "@material-ui/core";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@material-ui/icons/Share";
const Vote = ({ energiser } ) => {
    const [voteUp, setVoteUp] = useState(energiser.likes);
    const [voteDown, setVoteDown] = useState(energiser.dislikes);
    const likeBtn=()=>{
        setVoteUp(voteUp+1);
    };
    const disLikeBtn=()=>{
        setVoteDown(voteDown+1);
        };
  return (
    <section>
    <IconButton aria-label="thumbs-up" onClick={()=>likeBtn()}>
        <ThumbUpOffAltIcon />
        {voteUp}
    </IconButton>
    <IconButton aria-label="thumbs-down" onClick={()=>disLikeBtn()}>
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