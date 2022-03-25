import Cards from "./Cards";
// import SearchBar from "../components/SearchBar/SearchBar";
import Typography from "@material-ui/core/Typography";


const AllEnergisers = ({ energisers, setEnergisers }) => {
	console.log("Energisers:", energisers);
    console.log(setEnergisers);

    return (
			<>
   {/* <SearchBar allEnergisers={energisers} searchedEnergisers={setEnergisers} /> */}
				<Typography variant="h4" color="primary" align="center">
					Pick your favourite energiser and get boosted
				</Typography>
				<Cards listEnergisers={energisers} />
			</>
		);
};

export default AllEnergisers;