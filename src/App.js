import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import routes from "./components/Routes/Routes"
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./pages/index"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Main/>
      </Router>
    );
  }
}

export default App;

