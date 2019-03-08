import React from 'react'
import PropTypes from 'prop-types'

function Matches(props) {
  const { keyword, cities } = props

  const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      return place.city.match(regex) || place.state.match(regex)
    })
  }

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const matchArray = findMatches(keyword, cities)

  return (
    <ul className="suggestions">
      {keyword &&
        matchArray.map((place, index) => {
          const regex = new RegExp(keyword, 'gi')
          const cityName = place.city.replace(
            regex,
            `<span class="hl">${keyword}</span>`
          )
          const stateName = place.state.replace(
            regex,
            `<span class="hl">${keyword}</span>`
          )
          return (
            <li key={index}>
              <span
                className="name"
                dangerouslySetInnerHTML={{
                  __html: `${cityName}, ${stateName}`
                }}
              />
              <span className="population">
                {numberWithCommas(place.population)}
              </span>
            </li>
          )
        })}
    </ul>
  )
}

Matches.propTypes = {
  keyword: PropTypes.string,
  cities: PropTypes.array
}

export default Matches
