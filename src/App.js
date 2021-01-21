import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  getLoading = function () {
    return (
      <div class="loader">
        <span class="loader__text">Loading...</span>
        <img
          src="https://devtalk.kakao.com/uploads/default/original/2X/8/8d3426581b592b46157de64b919d4378b504d346.gif"
          alt="Loading"
        ></img>
      </div>
    );
  };

  getReady = function (movies) {
    return (
      <div class="movies">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          );
        })}
      </div>
    );
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? this.getLoading() : this.getReady(movies)}
      </section>
    );
  }
}
export default App;
