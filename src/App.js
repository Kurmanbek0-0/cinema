import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layalt from "./components/layalt/Layalt";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";

function App() {
	return (
		<div>
			<Layalt>
				<Routes>
					<Route path={"/"} element={<Home/>} />
					<Route path="/movie-details/:id" element={<Movie/>} />
				</Routes>
			</Layalt>
			<Routes></Routes>
		</div>
	);
}

export default App;
