import "./App.css";
import Index from "./pages/Index";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [movies, setMovies] = useState();

	useEffect(() => {
		axios
			.get("https://ghibliapi.herokuapp.com/films/")
			.then((res) => setMovies(res.data));
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Index movies={movies} />} />
				<Route path="/movie/:id" element={<Details movies={movies} />} />
			</Routes>
		</div>
	);
}

export default App;
