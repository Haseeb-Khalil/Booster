import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../footer/Footer";


export function Home({ energisers }) {

	return (
		<>
		<main role="main">
			<div className="booster__hero">
				<div className="hero__text">
					<h5>To Get Boosted Choose One Of The Following</h5>
					<h2 > <a href="#energisers">Energisers</a></h2>
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
									<div>
										<p>{energiser.description}</p>
									</div>
									<div className="energiser__item-buttons">
										<Link className="btn" to={`/energiser/${energiser.id}`} >Select</Link>
										<Link to={`/energiser/${energiser.id}`} >Select</Link>
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

	</>
	);
}

export default Home;
