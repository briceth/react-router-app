// Dependencies
import React from 'react';
import { render } from 'react-dom';

//scss
import './stylesheets/style.scss';

// document.write("It works.");

//routes
import routes from './router';

// main Render
render(routes, document.getElementById('root'));
