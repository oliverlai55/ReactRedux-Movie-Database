import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Link } from 'react-router';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);


  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top navbar-full navbar-dark bg-inverse">
          <Link to="/">
            <a className="navbar-brand" href="#">MovieMaster</a>
          </Link>
          <ul className="nav navbar-nav pull-sm-right">
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
          <form onSubmit={this.onFormSubmit} className="navsearch-bar form-inline pull-sm-right">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
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
