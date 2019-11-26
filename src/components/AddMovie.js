// import React, { useState } from "react";
import React, { Component } from "react";
import {
	Label,
	Input,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";

// const [modal, setModal] = useState(false);
// const toggle = () => setModal(!modal);

class AddMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			movie: {
				title: "",
				year: "",
				image:
					"https://icon-library.net/images/no-photo-available-icon/no-photo-available-icon-21.jpg",
				rating: 0
			}
		};
	}
	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	handleInput = e => {
		this.setState({
			...this.state,
			movie: {
				...this.state.movie,
				[e.target.name]: e.target.value
			}
		});
		console.log('addMovie',this.state)
	};
	resetState = () =>
		this.setState({
			movie:{title: "",
			year: "",
			image:
				"https://icon-library.net/images/no-photo-available-icon/no-photo-available-icon-21.jpg",
			rating: 0}
		});

	handleAdd = () =>{if(this.state.movie.image && this.state.movie.title && this.state.movie.year && this.state.movie.rating)
			{this.props.AddMovie(this.state.movie)}
		else{ alert("No empty")}
		}

		

		

	render() {
		return (
			<div>
				<Button className="new-movie-card" onClick={this.toggle}>
					+
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add a new movie </ModalHeader>
					<ModalBody>
						<Label>Movie Image :</Label>
						<Input
							name="image"
							className="input-form"
							placeholder=" Enter Movie Image"
							onChange={this.handleInput}
							value={this.state.image}
						/>
						<Label>Movie Title :</Label>
						<Input
							name="title"
							className="input-form"
							placeholder="Enter Movie Title"
							onChange={this.handleInput}
							value ={this.state.title}
						/>
						<Label>Movie's release date :</Label>

						<Input
							name="year"
							className="input-form"
							placeholder="Film's release date"
							onChange={this.handleInput}
							value={this.state.year}
						/>
						<Label>Movie Rating :</Label>
						<Input
							name="rating"
							className="input-form"
							placeholder="Movie Rating"
							onChange={this.handleInput}
							value={this.state.rating}
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							color="primary"
							onClick={() => {
								this.handleAdd()
								// this.props.AddMovie(this.state.movie);
								this.toggle();
								this.resetState();
							}}>
							Add
						</Button>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default AddMovie;
