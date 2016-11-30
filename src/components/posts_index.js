import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection } from '../actions/index';
import { sortMovies } from '../actions/index';
import NavBar from './navbar';
import FilterBar from './filterbar';
import { Link } from 'react-router';

class PostsIndex extends Component {
    constructor() {
        super();

        this.state = { movieArray: [] };

        this.filterMovies = this.filterMovies.bind(this);
    }

    componentWillMount() {
        this.props.fetchCollection();
    }

    renderMovies() {
        //This is where I generate data, array of objects
        if (this.props.movies) {

            return this.props.movies.map((movie) => {
                if (movie.poster_path !== null) {
                    let movieImageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
                    // console.log(movie.vote_average);
                    return (
                        <div key={movie.id} className="card col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <Link to={"movie/" + movie.id}>
                                <img className="card-img-top" src={movieImageUrl} alt="Image N/A" />
                            </Link>
                        </div>
                    )
                }
            });
        } else {
            return <div>still loading</div>
        }
    }

    render() {
      return (
        <div>
            <NavBar />
            <div className="container">
                <FilterBar filterMovies={this.filterMovies} />
                <div className="card-group col-sm-12">
                    {this.renderMovies()}
                </div>
            </div>
        </div>
    );
    }
}

function mapStateToProps(state) {
    return { movies: state.movies.all };
}

export default connect(mapStateToProps, { fetchCollection, sortMovies })(PostsIndex);
