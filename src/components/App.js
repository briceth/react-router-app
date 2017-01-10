import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className='container'>
        <header>
          <ul className="main-nav">
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/teachers'>Teachers</a></li>
            <li><a href='/courses'>Courses</a></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
