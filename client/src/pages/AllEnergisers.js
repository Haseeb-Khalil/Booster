import Cards from "./Cards";
// import SearchBar from "../components/SearchBar/SearchBar";
//import SortBar from "../components/SortBar/SortBar";

const AllEnergisers = ({ energisers, setEnergisers }) => {
	console.log("Energisers:", energisers);
    console.log(setEnergisers);

    return (
        <>
            {/* <SearchBar allEnergisers={energisers} searchedEnergisers={setEnergisers} /> */}
            {/* <SortBar /> */}
			<Cards energisers={energisers} />
		</>
    );
};

export default AllEnergisers;