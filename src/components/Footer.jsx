import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <footer className='footer' role='contentinfo'>
        <i className='fa fa-github-alt' aria-hidden='true' /> <a className='footer__link black' href='https://github.com/charlotteis/tomaquet'>GitHub</a>
        <i aria-hidden='true'>&#x1f38f;</i> <a className='footer__link black' href='https://glitch.com/edit/#!/tomaquet'>Remix on Glitch</a>
      </footer>
    )
  }
}

export default Footer
