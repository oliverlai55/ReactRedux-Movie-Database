import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCollection } from '../actions/index';
import Select from 'react-select';


export default class FilterBar extends Component {
  //may NOT need props since we still have access to it later
  constructor(props) {
    super(props)
    console.log("This is props: " + this.props.filterMovies);
    this.state = {
      selectedVideo: 'Playing'
    };

  }
  logChange(val) {
    console.log('logchange');
  }

  render() {
    // console.log(this.props.filterMovies('hola filter'));
    var options = [
      { value: 'one', label: 'One'},
      { value: 'two', label: "Two"}
    ];

    // function logChange(val) {
    //   console.log("Seclcted " + val);
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

      // Change state
      <div>
        <div className="form-group">

          <select className="form-control filter-bar" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

      </div>
    );
  }
}
