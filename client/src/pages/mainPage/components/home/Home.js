import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMG from "../../components/energiser-Imgs/city-guesser.png";

import "./Home.css";
import Footer from "../footer/Footer";

export function Home() {
	const [energisers, setEnergisers] = useState();

	const backendUrl = "http://localhost:3100/api";

	useEffect(() => {
		fetch(backendUrl + "/energisers")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log(body);
				setEnergisers(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

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
										<h2>{energiser.title}</h2>
									</div>
									<div className="energiser__item-image">
										<img src={IMG} alt="Fake-logo" className="energiser__img" />
									</div>
									<div>
										<p>{energiser.description}</p>
									</div>
									<div className="energiser__item-buttons">
										<a
											href={energiser.link}
											className="btn"
											target="_blank"
										>
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
