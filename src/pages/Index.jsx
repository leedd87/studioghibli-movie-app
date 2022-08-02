import React from "react";
import Hero from "../components/Hero";
import Movies from "../components/Movies";

const Index = ({ movies }) => {
	return (
		<>
			<Hero />
			<Movies movies={movies} />
		</>
	);
};

export default Index;
