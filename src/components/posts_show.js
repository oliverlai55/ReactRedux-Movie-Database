import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchMovie(this.props.params.id);
  }

  render() {
    const { movie } = this.props;

    if (!movie) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        {movie.title}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie };
}

export default connect(mapStateToProps, { fetchMovie })(PostsShow);
