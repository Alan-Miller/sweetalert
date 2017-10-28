import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';

class App extends Component {

  componentDidMount() {
    swal('Oops', 'Something went wrong.', 'error');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SweetAlert</h1>
        </header>

      </div>
    );
  }
}

export default App;
