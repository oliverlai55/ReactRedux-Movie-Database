import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-full navbar-light bg-faded">
          <Link to="/">
            <a className="navbar-brand" href="#">Navbar</a>
          </Link>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline float-xs-right">
            <input className="form-control" type="text" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </nav>
        </div>
    );
  }
}
