import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './navbar.js';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className=" col-sm-8 about-page-wrapper">
          <h3>Summary</h3>
          <p>The MovieMaster App uses the <a href="https://www.themoviedb.org/">The Movie DB API</a> to render movie data.  I'm currently in the progress of implementing additional features that allow users to generate a saved list of selected movies.</p>
        </div>
      </div>
    </div>
  )
};

export default About;
