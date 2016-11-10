import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection } from '../actions/index';

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchCollection();
    }

    renderMovies() {
        //This is where I generate data, array of objects
        console.log(this.props.movies.results);

        // return this.props.movies.results.map((movie) => {
        //     return <div>{movie.title}</div>
        // });
    }

    render() {
      return (
        <div>
            {this.renderMovies()}
        </div>
    );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies.all };
}

export default connect(mapStateToProps, { fetchCollection })(PostsIndex);
