import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchRating from "./SearchRating";
import MovieList from "./MovieList";
import avengers from "../images/avengers.png";
import deadpool from "../images/deadpool.png";
import it from "../images/it.png";
import godfather from "../images/godfather.png";

const initialMovies = [
	{
		image: `${avengers}`,
		title: "Avengers",
		year: "2019",
		rating: 4,
		id: "aven"
	},
	{
		image: `${deadpool}`,
		title: "Deadpool",
		year: "2016",
		rating: 4,
		id: "dead"
	},
	{
		image: `${it}`,
		title: "IT",
		year: "2019",
		rating: 1,
		id: "it"
	},
	{
		image: `${godfather}`,
		title: "The Godfather",
		year: "1972",
		rating: 5,
		id: "parrain"
	}
];

class MovieContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: initialMovies,
			titleFilter: "",
			minRatingFilter: 0
		};
	}
	getFiltredMovies = () => {
		return this.state.movies.filter(el => {
			if (
				el.rating >= this.state.minRatingFilter &&
				el.title
					.toLowerCase()
					.includes(this.state.titleFilter.toLowerCase().trim())
			)
				return el;
		});
	};

	getfiltredNames = newTitleFilter => {
		this.setState({
			titleFilter: newTitleFilter
		});
	};

	addMovie = newMovie => {
		this.setState({
		movies: [...this.state.movies, newMovie]
	});
	
		console.log("from addmovi",newMovie);
	};
	getfiltredRating = newRating => {
		this.setState({
			minRatingFilter: newRating
		});
	};

	render() {
		console.log("from render", this.state);
		return (
			<div className="movie-app">
				<header className="movie-app-header">
					<SearchBar
						value={this.state.titleFilter}
						nameChange={this.getfiltredNames}
					/>
					<SearchRating
						count={this.state.minRatingFilter}
						ratingChangeFilter={this.getfiltredRating}
					/>
				</header>
				<main className="movie-app-main">
					<MovieList
						movies={this.getFiltredMovies()}
						movieadded={this.addMovie}
					/>
				</main>
			</div>
		);
	}
}
export default MovieContainer;
