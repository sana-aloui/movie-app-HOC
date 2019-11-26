import React from "react";
import Rating from "./Rating";

const SearchRating = ({ ratingChangeFilter, count }) => (
	<div className="rating-filter">
		<span className="rating-text">Minimum rating</span>
		<Rating
			count={count}
			ratingChange={newRating => {
				ratingChangeFilter(newRating);
			}}
		/>
	</div>
);
export default SearchRating;
