import React from 'react'
import './style.scss'
import videoResource from './652333414.mp4'

class Player extends React.Component {
  state = {
    percent: 0,
    video: null,
    playIcon: '►',
    mousedown: false,
    volume: 0.5,
    playbackRate: 1
  }

  handleTimeUpdate() {
    const percent =
      (this.state.video.currentTime / this.state.video.duration) * 100
    this.setState({ percent })
  }

  handleTogglePlay() {
    if (this.state.video.paused) {
      this.state.video.play()
      this.setState({
        playIcon: '❚ ❚'
      })
    } else {
      this.state.video.pause()
      this.setState({
        playIcon: '►'
      })
    }
  }

  scrub(e) {
    e.persist()
    const scrubTime =
      (e.nativeEvent.offsetX / this.refs.progress.offsetWidth) *
      this.state.video.duration
    this.refs.video.currentTime = scrubTime
  }

  handleVolume(e) {
    const value = e.target.value
    this.setState({
      volume: value
    })
    this.refs.video.volume = value
  }

  handlePlaybackRate(e) {
    const value = e.target.value
    this.setState({
      playbackRate: value
    })
    this.refs.video.playbackRate = value
  }

  handleSkip(v) {
    this.refs.video.currentTime += parseFloat(v)
  }

  componentDidMount() {
    this.setState({
      video: this.refs.video
    })
    document.querySelector('html').classList.add('Player')
  }

  componentWillUnmount() {
    document.querySelector('html').className = ''
  }

  render() {
    return (
      <div className="player">
        <video
          className="player__video viewer"
          src={videoResource}
          onTimeUpdate={ev => this.handleTimeUpdate(ev)}
          ref="video"
        />
        <div className="player__controls">
          <div
            className="progress"
            ref="progress"
            onClick={e => this.scrub(e)}
            onMouseMove={e => this.state.mousedown && this.scrub(e)}
            onMouseDown={() => this.setState({ mousedown: true })}
            onMouseUp={() => this.setState({ mousedown: false })}
          >
            <div
              className="progress__filled"
              style={{ flexBasis: this.state.percent + '%' }}
            />
          </div>
          <button
            className="player__button toggle"
            title="Toggle Play"
            onClick={() => this.handleTogglePlay()}
          >
            {this.state.playIcon}
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value={this.state.volume}
            onChange={e => this.handleVolume(e)}
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value={this.state.playbackRate}
            onChange={e => this.handlePlaybackRate(e)}
          />
          >
          <button
            data-skip="-10"
            className="player__button"
            onClick={() => this.handleSkip(-10)}
          >
            « 10s
          </button>
          <button
            data-skip="25"
            className="player__button"
            onClick={() => this.handleSkip(25)}
          >
            25s »
          </button>
        </div>
      </div>
    )
  }
}

export default Player
