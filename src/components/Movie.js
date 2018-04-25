import React from "react";
import Summary from "./Summary.js";

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      movieSummary: null
    }
  }

  handleButtonClick = (event) => {
      const summary = <Summary summary={this.props.summary}/>
      this.setState({movieSummary: summary});
    }

  render() {
    return (
          <React.Fragment>
            <p>{this.props.title}</p>
            <p>{this.props.headline}</p>
            <button onClick = {this.handleButtonClick}>View More</button>
            <p>{this.state.movieSummary}</p>
          </React.Fragment>


    )
  }
}

export default Movie;
