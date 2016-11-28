import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection } from '../actions/index';
import Select from 'react-select';


export default class FilterBar extends Component {
  //may NOT need props since we still have access to it later
  constructor(props) {
    super(props)
    // console.log("This is props: " + this.props.filterMovies);
    this.state = {
      selectedVideo: 'Playing'
    };

    this.logChange = this.logChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  logChange(event) {
    // console.log('logchange');
  }

  onInputChange() {
    console.log("INPUT CHANGE SELECT");
    var value = React.findDOMNode(this.refs.mySelect).value;
    console.log(value);
    this.props.filterMovies(value);
  }

  render() {
    // console.log(this.props.filterMovies('hola filter'));
    // console.log("STATE: " + this.state.selectedVideo);
    let selectedVideo = this.state.selectedVideo;
    var options = [
      { value: 'one', label: 'One'},
      { value: 'two', label: "Two"}
    ];
    //
    // function logChange(val) {
    //   console.log(val.target.value);
    // }

    return (
      // <div className="filter-bar col-sm-12">
      //   <div className="dropdown open">
      //     <a className="btn btn-sm btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Dropdown link
      //     </a>
      //
      //     <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      //       <a className="dropdown-item" href="#">Action</a>
      //       <a className="dropdown-item" href="#">Another action</a>
      //       <a className="dropdown-item" href="#">Something else here</a>
      //     </div>
      //   </div>
      //
      // </div>


      // <Select
      //     className="filter-bar"
      //     name="form-field-name"
      //     value={selectedVideo}
      //     options={options}
      //     onChange={logChange}
      // />



      // Change state
      <div>
        <form onSubmit={this.logChange}>
          <div className="form-group">
            <select
              className="form-control filter-bar"
              onChange={this.onInputChange}
              ref="mySelect"
              >
              <option value="current">Currently Playing</option>
              <option value="top-rated">Top Rated</option>
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
