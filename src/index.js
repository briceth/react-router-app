// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//scss
import './stylesheets/style.scss';

// Components
import App from './components/App';
import Home from './components/Home';
import Home from './components/Courses';
import Home from './components/About';

// document.write("It works.");

// Render
render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
), document.getElementById('root'));
