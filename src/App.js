import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Day1 from './pages/day1/Day1'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/day1" component={Day1} />
        </div>
      </Router>
    )
  }
}

export default App
