import PopularEnergisers from "../components/CardsCarousel/PopularEnergisers";
import Header from "../components/Header/Header";
import Hero from "../components/Jumbotron/Hero";
import Footer from "../components/Footer/Footer";

export function Home() {
	return (
		<main role="main">
			<div>
				<Header />
				<Hero />
				<PopularEnergisers />
				<Footer />
			</div>
		</main>
	);
}

export default Home;