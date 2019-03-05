import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drumkit from './pages/day1/DrumKit'
import Clock from './pages/day2/Clock'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/day1" component={Drumkit} />
          <Route exact path="/day2" component={Clock} />
        </div>
      </Router>
    )
  }
}

export default App
