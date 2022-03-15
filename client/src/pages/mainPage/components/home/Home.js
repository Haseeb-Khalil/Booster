// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../components/energiser-Imgs/Mock-Image.png"

import "./Home.css";
import logo from "./logo.svg";
import Footer from "../footer/Footer";

// Mock Data 

const energisers = [
	{
		Name: "Kahoot",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "1",
	},
	{
		Name: "Gartic.io",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "2",
	},
	{
		Name: "Find the Colour",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "3",
	},
	{
		Name: "Vacation Destination",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "4",
	},
	{
		Name: "Favorite Movie Star",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "5",
	},
	{
		Name: "Best Friend ",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "6",
	},
	{
		Name: "Emoji",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "7",
	},
	{
		Name: "Weird Talent",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "8",
	},
	{
		Name: "Bucket List",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "9",
	},
	{
		Name: "Fav Youtube Video",
		Image: IMG,
		Description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		link: "https://sample.com",
		id: "10",
	},
];

export function Home() {
	// const [energizers, setEnergizers] = useState();

	//================================Will need it fetch actual data=========================================//

	// useEffect(() => {
	// 	fetch(api)
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			console.log(body)
	// 			setEnergisers(body);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
			<div className="booster__hero">
				<div className="hero__text">
					<h5>To Get Boosted Choose One Of The Following</h5>
					<h2>Energisers</h2>
				</div>
			</div>

			<section id="energisers">
				<div className="container energisers__container">
					{energisers ? (
						energisers.map((energiser) => {
							console.log(energiser);
							return (
								<article key={energiser.id} className="energiser__item">
									<div>
										<h2>{energiser.Name}</h2>
									</div>
									<div className="energiser__item-image">
										<img
											src={energiser.Image}
											alt="Fake-logo"
											className="energiser__img"
										/>
									</div>
									<div>
										<p>{energiser.Description}</p>
									</div>
									<div className="energiser__item-buttons">
										<a href={energiser.link} className="btn">
											Play
										</a>
										<button className="btn">Add to favorite</button>
									</div>
								</article>
							);
						})
					) : (
						<p>Loading ...</p>
					)}
				</div>
			</section>
			<Footer />
			<Link to="/about/this/site">About</Link>
		</main>
	);
}

export default Home;
