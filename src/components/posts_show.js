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
          <div className="col-md-6 col-sm-6 col-xs-12">
              <img className="movie-detail-img" src={movieImageUrl} alt="Image N/A" />
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
        <div className="container">
          <div className="col-sm-12">
            {this.renderMovie()}
            <div className="col-md-6 col-sm-6">
                <h3>{movie.title}</h3>
                <h6>{movie.release_date}</h6>
                <h6>{movie.runtime}</h6>
                <h6>{movie.vote_average}</h6>
                <h6>{movie.vote_count} voters</h6>
                <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie };
}

export default connect(mapStateToProps, { fetchMovie })(PostsShow);
