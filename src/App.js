import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Drumkit from './pages/day1/DrumKit'
import Clock from './pages/day2/Clock'
import Variables from './pages/day3/Variables'
import Panels from './pages/day5/Panels'
import Type from './pages/day6/Type'
import Checkbox from './pages/day10/Checkbox'
import Player from './pages/day11/Player'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/day1" component={Drumkit} />
          <Route exact path="/day2" component={Clock} />
          <Route exact path="/day3" component={Variables} />
          <Route exact path="/day5" component={Panels} />
          <Route exact path="/day6" component={Type} />
          <Route exact path="/day10" component={Checkbox} />
          <Route exact path="/day11" component={Player} />
        </div>
      </Router>
    )
  }
}

export default App
