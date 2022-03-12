import { Route, Routes } from "react-router-dom";

import About from "./pages/secondPage/About";
import Home from "./pages/mainPage/components/home/Home.js";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
