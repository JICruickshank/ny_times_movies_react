import React from "react";
import MovieList from "../components/MovieList.js"
import Header from "../components/Header.js";
import SearchBar from "./SearchBar.js"

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.filterMovies = this.filterMovies.bind(this)
    this.state = {
      reviews: [],
      display_reviews: []
    }
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=bc854e6ddce94ff38c16cad053bdf78d")
      .then(response => response.json())
      .then(json => this.setState({reviews: json.results, display_reviews: json.results}))
    }

    filterMovies(text) {
      let reviews = this.state.reviews;
      let filteredMovies = [];
      for (let review of reviews){
        if((review.display_title.toLowerCase()).includes(text.toLowerCase())) {
          filteredMovies.push(review)
        }
      }
      this.setState({display_reviews: filteredMovies})
    }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <SearchBar filter={this.filterMovies}/>
        <MovieList reviews={this.state.display_reviews}/>
      </React.Fragment>
    )
  }
}




export default ReviewBox;
