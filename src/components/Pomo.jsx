import humanizeTime from 'humanize-time'
import React, { Component } from 'react'
import './Pomo.css'

class Pomo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: 1500000 // 25 minutes, in miliseconds
    }

    this.startPomo = this.startPomo.bind(this)
    this.stopPomo = this.stopPomo.bind(this)
  }

  startPomo () {
    if (this.timer) return
    this.timer = setInterval(() => {
      if (this.state.time >= 1000) {
        const time = (this.state.time - 1000)
        this.setState({ time })
      }
    }, 1000)
  }
  
  stopPomo () {
    clearInterval(this.timer)
    this.timer = undefined
  }

  render () {
    return (
      <section className='timer'>
        <h2>Timer</h2>
        <span className='timer__time'>{ humanizeTime(this.state.time) }</span>
        <div className='timer__controls'>
          <button
            className='pure-button black bg-green'
            onClick={this.startPomo}>Start</button>
          <button
            className='pure-button black bg-red'
            onClick={this.stopPomo}>Stop</button>
        </div>
      </section>
    )
  }
}

export default Pomo
