import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

const MovieList = ({movies,movieadded} )=> (
	<div className="movie-list">
	{/* {console.log(filtredMovie)} */}
	
		{movies.map((el,key) => <MovieCard key={key} movie={el} />)}
		<AddMovie AddMovie={movieadded} />
		{/* <div className="new-movie-card">+</div> */}
	</div>
);

export default MovieList;
