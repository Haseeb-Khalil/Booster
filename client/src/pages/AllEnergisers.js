import Cards from "../components/Cards";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Box, Grid } from "@material-ui/core";


const AllEnergisers = ({ energisers, setEnergisers }) => {
	console.log("Energisers:", energisers);
    console.log(setEnergisers);

    return (
			<>
				<Header />
				<Box>
					<Grid container>
						<Box m="auto">
							<Typography variant="h4" color="primary" align="center">
								Pick your favourite energiser and start boosted
							</Typography>
						</Box>
						<Box sx={{ m: 5 }}>
							<Cards listEnergisers={energisers} />
						</Box>
					</Grid>
				</Box>
				<Footer />
			</>
		);
};

export default AllEnergisers;