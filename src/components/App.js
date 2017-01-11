import React, { Component } from 'react';

// import { Link } from 'react-router';
//we now use NavLink component for the navbar
import Navlink from './navLinks';

class App extends Component {
  render() {
    return(
      <div className='container'>
        <header>
          <ul className="main-nav">
            <li><Navlink to='/'>Home</Navlink></li>
            <li><Navlink to='/about'>About</Navlink></li>
            <li><Navlink to='/teachers'>Teachers</Navlink></li>
            <li><Navlink to='/courses'>Courses</Navlink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
