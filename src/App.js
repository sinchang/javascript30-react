import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Day1 from './pages/day1/Day1'
import Day2 from './pages/day2/Day2'
import Day3 from './pages/day3/Day3'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/day1" component={Day1} />
          <Route exact path="/day2" component={Day2} />
          <Route exact path="/day3" component={Day3} />
        </div>
      </Router>
    )
  }
}

export default App
