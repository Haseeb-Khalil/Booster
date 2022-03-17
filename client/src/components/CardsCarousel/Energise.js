import React from "react";
import { useParams } from "react-router-dom";

const Energise = ({ energisers }) => {
    const { id } = useParams();
    console.log("id", typeof(id));
    console.log(typeof(energisers[0].id));

    return (
        <>
        {energisers.filter((energiser) => energiser.id === parseInt(id)).map((energiser) => {
                return (
                <div key={energiser.id}>
                    <h1>{energiser.title}</h1>
                    <p>{energiser.description}</p>
                    <p>{energiser.link}</p>
                </div>
            );
            })
        }
        </>
    );
};

export default Energise;