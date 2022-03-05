import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
//Test for Adem
const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
