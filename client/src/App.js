import logo from './logo.svg'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Navbar from './components/navbar/Navbar'
import React, { useState } from 'react'

function App() {
  const [showBtnTop, setShowBtnTop] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      setShowBtnTop(true)
    } else {
      setShowBtnTop(false)
    }
  })
  const returnToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className="App">
      <button
        className={showBtnTop ? 'top active' : 'top disabled'}
        onClick={returnToTop}>
        back to top
      </button>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
