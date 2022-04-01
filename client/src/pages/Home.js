import Header from "../components/Header/Header";
import Hero from "../components/Jumbotron/Hero";
import PopularEnergisers from "../components/CardsCarousel/PopularEnergisers";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";


export function Home() {

	return (
		<main role="main">
			<div>
				<Header />
				<Hero />
				<PopularEnergisers />
				<Blog />
				<Footer />
			</div>
		</main>
	);
}

export default Home;
