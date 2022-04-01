import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button, Link, Box, Typography, Container } from "@mui/material";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
	color: theme.palette.common.white,
	position: "relative",
	display: "flex",
	alignItems: "center",
	[theme.breakpoints.up("xl")]: {
		height: "100vh",
		minHeight: 500,
		maxHeight: 1800,
	},

	[theme.breakpoints.down("lg")]: {
		height: "50vh",
		minHeight: 500,
		maxHeight: 1300,
	},

	[theme.breakpoints.down("xs")]: {
		height: "20vh",
		minHeight: 400,
		maxHeight: 800,
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
			</Container>
		</HeroLayoutRoot>
	);
}

export default HeroLayout;
