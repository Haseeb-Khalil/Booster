import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@material-ui/core/Link";
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

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

	return (
		<HeroLayoutRoot>
			<Container
				sx={{
					mt: 3,
					mb: 14,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
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
						opacity: 0.5,
						zIndex: -1,
					}}
				/>
				<Background sx={sxBackground} />

				<Box>
					<Link color="inherit" href="#CardsSection">
						<KeyboardArrowDownIcon
							fontSize="large"
							sx={{ position: "absolute", bottom: 32 }}
						/>
					</Link>
				</Box>
			</Container>
		</HeroLayoutRoot>
	);
}



export default ProductHeroLayout;
