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

        if (this.props.movies.results) {
            return this.props.movies.results.map((movie) => {

                let movieImageUrl = "http://image.tmdb.org/t/p/w300" + movie.backdrop_path;

                return (
                    <div key={movie.id} className="card col-sm-4">

                        <img className="card-img-top" src={movieImageUrl} alt="Image N/A" />
                        <div className="card-block">
                            <h4 className="card-title">{movie.title}
                            </h4>
                        </div>
                    </div>
                )
            });




        }else {
            return <div>still loading</div>
        }




    }

    render() {
      return (
        <div className="container">
            <div className="card-group col-sm-12">
                {this.renderMovies()}
            </div>
        </div>
    );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies.all };
}

export default connect(mapStateToProps, { fetchCollection })(PostsIndex);
