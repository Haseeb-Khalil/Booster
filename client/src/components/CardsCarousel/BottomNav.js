import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@material-ui/icons/Share";

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);

	return (
		<Box
			sx={{ ml: "auto", mr: "auto", mb: "5em", width: 500 }}
			textAlign="center"
			bgcolor="primary"
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label="Like" icon={<ThumbUpOffAltIcon />} />
				<BottomNavigationAction
					label="Dislike"
					icon={<ThumbDownOffAltIcon />}
				/>
				<BottomNavigationAction label="Share" icon={<ShareIcon />} />
			</BottomNavigation>
		</Box>
	);
}
