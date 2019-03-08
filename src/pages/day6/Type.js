import React from 'react'
import './style.scss'
import Matches from './Matches'

class Type extends React.Component {
  state = {
    cities: [],
    keyword: ''
  }

  handleChange(e) {
    const keyword = e.target.value

    this.setState({ keyword })
  }

  componentDidMount() {
    document.querySelector('html').classList.add('Type')

    const endpoint =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    fetch(endpoint)
      .then(blob => blob.json())
      .then(cities => this.setState({ cities }))
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return (
      <form className="search-form">
        <input
          type="text"
          className="search"
          placeholder="City or State"
          onChange={e => this.handleChange(e)}
        />
        <Matches keyword={this.state.keyword} cities={this.state.cities} />
      </form>
    )
  }
}

export default Type
