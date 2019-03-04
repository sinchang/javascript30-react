import React from 'react'
import './style.css'

function Day3() {
  return (
    <div className="day3-container">
      <h2>
        Update CSS Variables with <span className="hl">JS</span>
      </h2>

      <div className="controls">
        <label htmlFor="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value="10"
          data-sizing="px"
        />
        ><label htmlFor="blur">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value="10"
          data-sizing="px"
        />
        ><label htmlFor="base">Base Color</label>
        <input id="base" type="color" name="base" value="#ffc600" />
      </div>

      <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" alt="cover" />
    </div>
  )
}

export default Day3
