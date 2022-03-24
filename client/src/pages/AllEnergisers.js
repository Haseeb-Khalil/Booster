import Cards from "./Cards";
import Typography from "@material-ui/core/Typography";


const AllEnergisers = ({ energisers }) => {
	console.log("Energisers:", energisers);

    return (
			<>
				<Typography variant="h4" color="primary" align="center">
					Pick your favourite energiser and get boosted
				</Typography>
				<Cards listEnergisers={energisers} />
			</>
		);
};

export default AllEnergisers;