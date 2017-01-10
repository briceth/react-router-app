import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';

const routes = (
  <Router history={hashHistory}>
    <Route component={App} >
      <Route path="/" component={Home} />
      <Route path="home" component={Home} />
      <Route path="courses" component={Courses} />
      <Route path="about" component={About} />
    </Route>
  </Router>
);

export default routes;
