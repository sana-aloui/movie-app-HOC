import React from "react";
import Rating from "./Rating";

const MovieCard = props => {
	// const { movie = {} } = props;
	const {
		title ,
		year ,
		image ,
		rating 
	} = props.movie;
	return (
		<div className="movie-card">
			<img className="movie-image" src={image} alt="" />
			<h3 className="movie-title">{title}</h3>
			<p className="movie-year">{year}</p>
			{/* <span>★★★★☆</span> */}
			<span>
				<Rating count={rating} />
			</span>
		</div>
	);
};
export default MovieCard;
