import React from "react";

const SearchBar = ({ value = "", nameChange = () => {} }) => {
	return (
		<input
			type="text"
			placeholder="Search for Movie Title ..."
			className="movie-search"
			value={value}
			onChange={event => {
				nameChange(event.target.value);
			}}
		/>
	);
};
export default SearchBar;
