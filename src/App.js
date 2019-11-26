import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieContainer from "./components/MovieContainer";
import {Spinner} from "reactstrap"
import "./App.css";

const LoaderHoc = Component => {
	return ({ isLoading }) => {
	  if (!isLoading) return <Component />;
	//   return <div className="spinner" />;
	return <Spinner className="spinner" animation="border" role="status">
	<span className="sr-only spinner">Loading...</span>
  </Spinner>
	};
  };
  const NewComp = LoaderHoc(MovieContainer)
  class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		loading: true
	  };
	}
	//simulate loading
	componentDidMount() {
	  setTimeout(() => this.setState({ loading: false }), 2000);
	}
	render() {
	  return (
		<div className="App">
		  <NewComp isLoading={this.state.loading} />
		</div>
	  );
	}
  }
  
  export default App;