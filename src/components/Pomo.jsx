import humanizeTime from 'humanize-time'
import React, { Component } from 'react'
import './Pomo.css'

class Pomo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: 1500000 // 25 minutes, in miliseconds
    }

    this.countDown = this.countDown.bind(this)
  }

  countDown () {
    if (this.timer) return
    this.timer = setInterval(() => {
      if (this.state.time >= 1000) {
        const time = (this.state.time - 1000)
        this.setState({ time })
      }
    }, 1000)
  }

  render () {
    return (
      <section className='timer'>
        <h2>Timer</h2>
        <span className='timer__time'>{ humanizeTime(this.state.time) }</span>
        <button
          className='pure-button black bg-green timer__start'
          onClick={this.countDown}>Start</button>
      </section>
    )
  }
}

export default Pomo
