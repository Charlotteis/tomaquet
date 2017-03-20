import React, { Component } from 'react'
import Header from './components/Header'
import Pomo from './components/Pomo'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <main role='main'>
          <Pomo />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
