import React from 'react'
import './style.scss'

class Variables extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spacing: 10,
      blur: 10,
      base: '#ffc600'
    }
  }

  handleUpdate(event) {
    const target = event.target
    const name = target.name
    const suffix = target.dataset.sizing || ''
    const value = target.value

    this.setState({ [name]: value })
    document.documentElement.style.setProperty(`--${name}`, value + suffix)
  }

  componentDidMount() {
    document.querySelector('html').classList.add('Variables')
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return (
      <div>
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
            value={this.state.spacing}
            data-sizing="px"
            onChange={event => this.handleUpdate(event)}
            onMouseMove={event => this.handleUpdate(event)}
          />
          ><label htmlFor="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={this.state.blur}
            data-sizing="px"
            onChange={event => this.handleUpdate(event)}
            onMouseMove={event => this.handleUpdate(event)}
          />
          ><label htmlFor="base">Base Color</label>
          <input
            id="base"
            type="color"
            name="base"
            value={this.state.base}
            onChange={event => this.handleUpdate(event)}
          />
        </div>

        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="cover"
        />
      </div>
    )
  }
}

export default Variables
