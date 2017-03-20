import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header role='banner'>
        <h1>
          <span aria-hidden='true'>&#x1f345;&nbsp;</span>
          <span lang='ca'>Tomáquet</span> &mdash; A pomodoro tracker
          <span aria-hidden='true'>&nbsp;&#x1f345;</span>
        </h1>
      </header>
    )
  }
}

export default Header
