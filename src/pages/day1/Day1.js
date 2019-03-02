import React from 'react'
import './style.css'
import sounds from '../day1/sounds'

const INVALID_CODE = -1
const KEY_DATA = [
  {
    keyCode: 65,
    word: 'A',
    name: 'clap'
  },
  {
    keyCode: 83,
    word: 'S',
    name: 'hihat'
  },
  {
    keyCode: 68,
    word: 'D',
    name: 'kick'
  },
  {
    keyCode: 70,
    word: 'F',
    name: 'openhat'
  },
  {
    keyCode: 71,
    word: 'G',
    name: 'boom'
  },
  {
    keyCode: 72,
    word: 'H',
    name: 'ride'
  },
  {
    keyCode: 74,
    word: 'J',
    name: 'snare'
  },
  {
    keyCode: 75,
    word: 'K',
    name: 'tom'
  },
  {
    keyCode: 76,
    word: 'L',
    name: 'tink'
  }
]
class Day1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCode: INVALID_CODE
    }
  }

  handleKeydown(event) {
    this.setState({ keyCode: INVALID_CODE })
    const { keyCode } = event

    KEY_DATA.forEach(item => {
      if (item.keyCode === keyCode) {
        this.setState({
          currentCode: keyCode
        })

        const audioObj = new Audio(sounds[item.name])
        audioObj.play()
      }
    })
  }

  handleTransitionEnd(event) {
    if (event.propertyName !== 'transform') return

    this.setState({ currentCode: INVALID_CODE })
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      event => this.handleKeydown(event),
      false
    )
  }
  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      event => this.handleKeydown(event),
      false
    )
  }

  render() {
    return (
      <div>
        <div className="keys">
          {KEY_DATA.map((item, index) => {
            const classNames =
              item.keyCode === this.state.currentCode ? 'key playing' : 'key'
            return (
              <div
                className={classNames}
                key={index}
                onTransitionEnd={event => this.handleTransitionEnd(event)}
              >
                <kbd>{item.word}</kbd>
                <span className="sound">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Day1
