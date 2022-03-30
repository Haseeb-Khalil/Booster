import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Link, Box, Typography, Container } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
	color: theme.palette.common.white,
	position: "relative",
	display: "flex",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		height: "80vh",
		minHeight: 500,
		maxHeight: 1300,
	},
}));

const Background = styled(Box)({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	zIndex: -2,
});

function HeroLayout(props) {
	const { sxBackground, children } = props;

	return (
		<HeroLayoutRoot>
			<Container
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				maxWidth="false"
			>
				{children}
				<Box
					sx={{
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						backgroundColor: "common.black",
						opacity: 0.2,
						zIndex: -1,
					}}
				/>
				<Background sx={sxBackground} />

				<Box>
					<Link color="inherit" href="#CardsSection">
						<KeyboardArrowDownIcon
							sx={{ position: "absolute", bottom: 1, textAlign: "center" }}
							fontSize="large"
						/>
					</Link>
				</Box>
			</Container>
		</HeroLayoutRoot>
	);
}

export default HeroLayout;
