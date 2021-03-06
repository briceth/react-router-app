import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import NotFound from './components/notFound';
import Featured from './components/Featured';
import CourseContainer from './components/courses/CourseContainer';

import CourseList from './data/courses';

const routes = (
  <Router history={browserHistory}>
    <Route component={App} >
      <Route path="/" component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />

      <Route path= "courses" component={Courses} >

        {/* default redirection */}
        <IndexRedirect to="html" />

        <Route path="html" component={CourseContainer} data={CourseList.HTML} />
        <Route path="css" component={CourseContainer} data={CourseList.CSS} />
        <Route path="javascript" component={CourseContainer} data={CourseList.JS} />
      </Route>

      <Route path="featured/:topic/:name" component={Featured}/>

      {/* notfound component with App as parent */}
      <Route path="*" component={NotFound}/>

    </Route>
  </Router>
);

export default routes;
