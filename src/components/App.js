import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return(
      <div className='container'>
        <header>
          <ul className="main-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/teachers'>Teachers</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default App;
