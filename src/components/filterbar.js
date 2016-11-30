import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection, sortMovies } from '../actions/index';
import Select from 'react-select';


class FilterBar extends Component {
  //may NOT need props since we still have access to it later
  constructor(props) {
    super(props)
    this.state = {
      selectedVideo: 'Playing'
    };

    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange() {
    console.log("INPUT CHANGE Function");
    var value = React.findDOMNode(this.refs.mySelect).value;
    this.props.sortMovies(value);

  }

  render() {

    return (
      <div>
        <form onSubmit={this.logChange}>
          <div className="form-group">
            <select
              className="form-control filter-bar"
              onChange={this.onInputChange}
              ref="mySelect"
              >
              <option value="release_date">Currently Playing</option>
              <option value="vote_average">Top Rated</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button type="submit" className="btn btn-outline-success">Update</button>
          </div>
        </form>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sortMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterBar);
