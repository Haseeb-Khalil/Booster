import CardCarousel from "./CardCarousel";
import Header from "../components/Header/Header";
import Theme from "../components/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer/Footer";

const AllEnergisers = () => {
    return (
        <ThemeProvider theme={Theme}>
			<Header />
			<CardCarousel />
			<Footer />
		</ThemeProvider>
    );
};

export default AllEnergisers;