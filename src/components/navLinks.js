import React from 'react';
import { Link } from 'react-router';

//const is another ES2015 way to render a component
const NavLink = props => (
  <Link {...props} activeClassName="active" />
);

export default NavLink;
