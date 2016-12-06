import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Link } from 'react-router';
import { searchTitle } from '../actions/index';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
    this.props.searchTitle(this.state.term);
    this.setState({ term: ''});
  }

  reloadPage() {
    location.reload();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-full navbar-dark bg-inverse">
          <Link to="/">
            <a className="navbar-brand" onClick={this.reloadPage} href="#"><img className="logo-image" src="../src/img/moviemaster.png" /></a>
          </Link>
          <ul className="nav navbar-nav pull-sm-right">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form onSubmit={this.onFormSubmit} className="navsearch-bar form-inline pull-sm-right">
            <input
              className="form-control"
              type="text"
              placeholder="Search Movie Title"
              value={this.state.term}
              onChange={this.onInputChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </nav>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTitle }, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
