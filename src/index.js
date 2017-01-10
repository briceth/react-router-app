import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import './stylesheets/style.scss';

// Components
import App from './components/App';

// document.write("It works.");

// Render
render(
  <App />,
  document.getElementById('root')
);
