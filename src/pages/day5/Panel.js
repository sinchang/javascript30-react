import React from 'react'
import './style.scss'

class Panels extends React.Component {
  panelRef = React.createRef()

  state = {
    isActive: false,
    isOpen: false
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidMount() {
    // Refs: https://git.io/fhpVZ
    this.panelRef.current.addEventListener('transitionend', e => {
      if (e.propertyName.includes('flex')) {
        this.setState({ isActive: !this.state.isActive })
      }
    })
  }

  render() {
    return (
      <div
        ref={this.panelRef}
        className={`panel panel${this.props.panelIndex}${
          this.state.isActive ? ' open-active' : ''
        }${this.state.isOpen ? ' open' : ''}`}
        onClick={() => this.toggleOpen()}
      >
        {this.props.content.map((word, i) => (
          <p key={i}>{word}</p>
        ))}
      </div>
    )
  }
}

export default Panels
