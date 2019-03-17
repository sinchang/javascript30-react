import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default () => {
  useEffect(() => {
    document.querySelector('html').className = ''
  })

  return (
    <div className="homepage">
      <h2>JavaScript 30 React Version</h2>
      <ul>
        <li>
          <Link to="/day1/">JavaScript Drum Kit</Link>
        </li>
        <li>
          <Link to="/day2/">CSS + JS Clock</Link>
        </li>
        <li>
          <Link to="/day3/">Playing with CSS Variables and JS</Link>
        </li>
        <li>
          <Link to="/day5/">Flex Panels Image Gallery</Link>
        </li>
        <li>
          <Link to="/day6/">Ajax Type Ahead</Link>
        </li>
        <li>
          <Link to="/day8/">Fun with HTML5 Canvas</Link>
        </li>
        <li>
          <Link to="/day10/">Hold Shift to Check Multiple Checkboxes</Link>
        </li>
        <li>
          <Link to="/day11/">Custom HTML5 Video Player</Link>
        </li>
        <li>
          <Link to="/day12/">Key Sequence Detection (KONAMI CODE)</Link>
        </li>
        <li>
          <Link to="/day13/">Slide In on Scroll</Link>
        </li>
        <li>
          <Link to="/day14/">Object and Arrays - Reference VS Copy</Link>
        </li>
        <li>
          <Link to="/day15/">LocalStorage and Event Delegation</Link>
        </li>
        <li>
          <Link to="/day16/">CSS Text Shadow Mouse Move Effect</Link>
        </li>
        <li>
          <Link to="/day17/">Sorting Band Names without articles</Link>
        </li>
        <li>
          <Link to="/day18/">Tally String Times with Reduce</Link>
        </li>
        <li>
          <Link to="/day19/">Unreal Webcam Fun</Link>
        </li>
        <li>
          <Link to="/day20/">Native Speech Recognition</Link>
        </li>
        <li>
          <Link to="/day21/">Geolocation based Speedometer and Compass</Link>
        </li>
        <li>
          <Link to="/day22/">Follow Along Links</Link>
        </li>
        <li>
          <Link to="/day23/">Speech Synthesis</Link>
        </li>
        <li>
          <Link to="/day24/">Sticky Nav</Link>
        </li>
        <li>
          <Link to="/day25/">Event Capture Propagation Bubbling and Once</Link>
        </li>
        <li>
          <Link to="/day26/">Stripe Follow Along Dropdown</Link>
        </li>
        <li>
          <Link to="/day27/">Click and Drag to Scroll</Link>
        </li>
        <li>
          <Link to="/day28/">Video Speed Controller UI</Link>
        </li>
        <li>
          <Link to="/day29/">Countdown Clock</Link>
        </li>
        <li>
          <Link to="/day30/">Whack A Mole Game</Link>
        </li>
      </ul>
    </div>
  )
}
