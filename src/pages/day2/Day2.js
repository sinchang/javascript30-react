import React, { useState, useEffect } from 'react'
import './style.css'

function Day2() {
  const [secondsDegrees, setSecondsDegrees] = useState(0)
  const [minsDegrees, setMinsDegrees] = useState(0)
  const [hourDegrees, setHourDegrees] = useState(0)

  useEffect(() => {
    function setDate() {
      const now = new Date()

      const seconds = now.getSeconds()
      const secondsDegrees = (seconds / 60) * 360 + 90
      setSecondsDegrees(secondsDegrees)

      const mins = now.getMinutes()
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90
      setMinsDegrees(minsDegrees)

      const hour = now.getHours()
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90
      setHourDegrees(hourDegrees)
    }

    setInterval(setDate, 1000)

    setDate()
  })

  return (
    <div className="day2-container">
      <div className="clock">
        <div className="clock-face">
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hourDegrees}deg)` }}
          />
          <div
            className="hand min-hand"
            style={{ transform: `rotate(${minsDegrees}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondsDegrees}deg)` }}
          />
        </div>
      </div>
    </div>
  )
}

export default Day2
