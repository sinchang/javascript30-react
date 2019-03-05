import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drumkit from './pages/day1/DrumKit'
import Clock from './pages/day2/Clock'
import Variables from './pages/day3/Variables'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/day1" component={Drumkit} />
          <Route exact path="/day2" component={Clock} />
          <Route exact path="/day3" component={Variables} />
        </div>
      </Router>
    )
  }
}

export default App
