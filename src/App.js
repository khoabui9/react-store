import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import routes from "./components/Routes/Routes"
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      routes
    );
  }
}

export default App;

