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

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange() {
    var value = React.findDOMNode(this.refs.mySelect).value;

    this.props.sortMovies(value);

  }

  render() {

    return (
      <div>
        <form onSubmit={this.logChange}>
          <div className="form-group form-group-bar col-sm-3">
            <select
              className="form-control filter-bar"
              onChange={this.onSelectChange}
              ref="mySelect"
            >
              <option value="popularity">Most Popular</option>
              <option value="vote_average">Top Rated</option>
              <option value="release_date">Currently Playing</option>
              <option>4</option>
              <option>5</option>
            </select>
            
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
