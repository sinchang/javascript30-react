import React from 'react'
import './style.scss'

class Checkbox extends React.Component {
  state = {
    inputs: [
      {
        text: 'This is an inbox layout.',
        checked: false
      },
      {
        text: 'Check one item',
        checked: false
      },
      {
        text: 'Hold down your Shift key',
        checked: false
      },
      {
        text: 'Check a lower item',
        checked: false
      },
      {
        text: 'Everything in between should also be set to checked',
        checked: false
      },
      {
        text: 'Try do it without any libraries',
        checked: false
      },
      {
        text: 'Just regular JavaScript',
        checked: false
      },
      {
        text: 'Good Luck!',
        checked: false
      },
      {
        text: "Don't forget to tweet your result!",
        checked: false
      }
    ]
  }

  handleInputChange(e, index) {
    e.persist()
    const checked = e.nativeEvent.target.checked
    const inputs = this.state.inputs

    inputs[index].checked = checked

    if (e.nativeEvent.shiftKey && checked) {
      for (let i = index + 1; i < inputs.length; i++) {
        if (inputs[i].checked) break
        inputs[i].checked = true
      }
    }

    this.setState({ inputs })
  }

  componentDidMount() {
    document.querySelector('html').classList.add('Checkbox')
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return (
      <div className="inbox">
        {this.state.inputs.map((input, index) => {
          return (
            <div className="item" key={index}>
              <input
                type="checkbox"
                checked={input.checked}
                onChange={e => this.handleInputChange(e, index)}
              />
              <p>{input.text}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Checkbox
