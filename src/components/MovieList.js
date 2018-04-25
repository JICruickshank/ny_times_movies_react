import React from "react";
import Movie from "./Movie.js"
import SearchBar from "../containers/SearchBar.js"

const MovieList = (props) => {
  const movies = props.reviews.map((review, index) => {
    return (
      <li key={index}>
        <Movie
          key={index}
          title={review.display_title}
          image={review.multimedia.src}
          headline={review.headline}
          summary={review.summary_short}/>
      </li>
    )
  })

  return(
    <ul>
      {movies}
    </ul>
  )
}



export default MovieList;
