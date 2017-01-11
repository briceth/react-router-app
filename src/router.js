import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import NotFound from './components/notFound';
import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import JavaScript from './components/courses/JavaScript';

const routes = (
  <Router history={browserHistory}>
    <Route component={App} >
      <Route path="/" component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />

      <Route path= "courses" component={Courses} >

        {/* default redirection */}
        <IndexRedirect to="html" />
        
        <Route path="html" component={HTML}/>
        <Route path="css" component={CSS}/>
        <Route path="javascript" component={JavaScript} />
      </Route>

      {/* notfound component with App as parent */}
      <Route path="*" component={NotFound}/>

    </Route>
  </Router>
);

export default routes;
