import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router';
import NavBar from './navbar';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchMovie(this.props.params.id);
  }


  renderMovie() {
    const { movie } = this.props;
    if (movie) {
      let movieImageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
      console.log(movieImageUrl);
      console.log(movie.poster_path);

      return (
          <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <img className="card-img-top" src={movieImageUrl} alt="Image N/A" />
          </div>
      )
    }
  }


  render() {
    const { movie } = this.props;
    console.log("====MOVIE DETAIL====");
    console.log(movie);

    if (!movie) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <NavBar />
        {movie.title}
        {movie.release_date}
        {movie.runtime}
        {movie.vote_average}
        {movie.vote_count}
        {movie.overview}
        {this.renderMovie()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie };
}

export default connect(mapStateToProps, { fetchMovie })(PostsShow);
