/* globals localStorage */
import humanizeTime from 'humanize-time'
import React, { Component } from 'react'
import './Pomo.css'

const TWENTY_FIVE_MINS = 1500000 // 25 minutes, in miliseconds

class Pomo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: this.setTime()
    }

    this.startPomo = this.startPomo.bind(this)
    this.stopPomo = this.stopPomo.bind(this)
    this.resetPomo = this.resetPomo.bind(this)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    this.timer = undefined
  }

  setTime () {
    const time = localStorage.getItem('time')

    if (time && time >= 1000) {
      return time
    }

    return TWENTY_FIVE_MINS
  }

  startPomo () {
    if (this.timer) return
    this.timer = setInterval(() => {
      if (this.state.time >= 1000) {
        const time = (this.state.time - 1000)
        this.setState({ time })
        localStorage.setItem('time', time.toString())
      }
    }, 1000)
  }

  stopPomo () {
    clearInterval(this.timer)
    this.timer = undefined
  }

  resetPomo () {
    clearInterval(this.timer)
    this.timer = undefined

    const time = TWENTY_FIVE_MINS
    this.setState({ time })
    localStorage.setItem('time', time.toString())
  }

  render () {
    return (
      <section>
        <h2>Timer</h2>
        <span className='timer__time'>{ humanizeTime(this.state.time) }</span>
        <div className='timer__controls'>
          <button
            className='timer__control pure-button black bg-green'
            onClick={this.startPomo}>Start</button>
          <button
            className='timer__control pure-button black bg-orange'
            onClick={this.stopPomo}>Stop</button>
          <button
            className='timer__control pure-button black bg-yellow'
            onClick={this.resetPomo}>Reset</button>
        </div>
      </section>
    )
  }
}

export default Pomo
