import React from 'react'
import './style.scss'

class Canvas extends React.Component {
  state = {}

  componentDidMount() {
    document.querySelector('html').classList.add('Canvas')
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return <div>hello</div>
  }
}

export default Canvas
