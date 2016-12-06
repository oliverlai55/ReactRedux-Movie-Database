# MovieMaster (In Progress)

## Contents
* [Project Overview](#project-overview)
    * [iOS, Android, and Browser Support](#ios-android-and-browser-support)
* [Installation](#installation)
* [Git Workflow](#git-workflow)
* [Assets](#assets)
    * [Stylesheets](#stylesheets)
* [Vendor JavaScript](#vendor-javascript)
* [Task Runner](#task-runner)

## Project Screenshot
![ScreenShot](src/img/projectscreenshot.png)

## Project Overview
MovieMaster is an HTML5 web app that runs in React.js and Redux.  The project serves as a platform for users to search and gather information on currently playing movies.

### iOS, Android, and Browser Support
This project is not accessible on iOS and Android.  It is only accessible across modern web browsers.

## Installation
1. Clone repo.
2. In terminal, navigate to the local project folder you just created.
3. Run `npm install`. This will install the project's dependencies and libraries.
4. After everything is installed, run `npm start` in terminal. Webpack will then run any default tasks and start up a local web server at http://localhost:8080.

## Git Workflow
1. Create your own feature branch off of `master`. Name your branch `your-initials-here/specific-feature-description`
2. Do work. Commit to your local branch.
3. When ready to merge back into `master`, rebase the `master` branch onto your local branch. If there are conflicts, fix them.
4. Once there are no conflicts, push your local feature branch to your remote feature branch.
5. Create a Pull Request from your remote feature branch to the `master` branch (on "origin").
6. Grab a cup of coffee and watch this [video](https://www.youtube.com/watch?v=uAuL_noJLoo)

## Assets (any specific info about assets like images, video, sound, documents)

### Stylesheets
* **Bootstrap**
http://v4-alpha.getbootstrap.com/

Bootstrap is a HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.  Bootstrap is used in this project for styling and UI features.

## Vendor JavaScript (list of third party libraries and use)
Nerdmaster Intern Project Frontend also makes use of several third-party JavaScript plugins:
* **React**
https://facebook.github.io/react/index.html

React is a JavaScript library for creating user interfaces by Facebook and Instagram. React views are typically rendered using components that contain additional components specified as custom HTML tags.

React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.

* **JSX**
https://facebook.github.io/react/docs/jsx-in-depth.html

JSX is a JavaScript syntax extension that looks similar to XML.

JSX is used to help make concise syntax for defining tree structures with attributes.

* **React Router**
https://github.com/reactjs/react-router

React Router is a complete routing library for React.  This projects uses React Router for routing.

* **Lodash**
https://lodash.com/

Lodash is a toolkit of Javascript functions that provides clean, performant methods for manipulating objects and collections.

## Task Runner
Nerdmaster uses [Webpack](https://webpack.github.io/) as its task runner.
