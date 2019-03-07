import React from 'react'
import './style.scss'
import Panel from './Panel'

class Panels extends React.Component {
  state = {
    panels: [
      {
        content: ['Hey', "Let's", 'Dance']
      },
      {
        content: ['Give', 'Take', 'Receive']
      },
      {
        content: ['Experience', 'It', 'Today']
      },
      {
        content: ['Give', 'All', 'You can']
      },
      {
        content: ['Life', 'In', 'Motion']
      }
    ]
  }

  componentDidMount() {
    document.querySelector('html').classList.add('Panel')
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return (
      <div className="panels">
        {this.state.panels.map((panel, panelIndex) => {
          return (
            <Panel
              key={panelIndex}
              panelIndex={panelIndex + 1}
              content={panel.content}
            />
          )
        })}
      </div>
    )
  }
}

export default Panels
