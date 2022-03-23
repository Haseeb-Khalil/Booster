import Cards from "./Cards";

const AllEnergisers = ({ energisers }) => {
	console.log("Energisers:", energisers);

    return (
        <>
			<Cards listEnergisers={energisers} />
		</>
    );
};

export default AllEnergisers;