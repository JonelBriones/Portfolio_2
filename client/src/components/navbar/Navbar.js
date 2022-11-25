import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(true)
  const changeBackground = () => {
    if (window.scrollY > 780) {
      setNavbarBackground(true)
    } else {
      setNavbarBackground(false)
    }
    // console.log(window.scrollY)
  }
  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <div className="container width-70">
        <div className="navbar"></div>
        <div className="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <div>
                <ul className="navbar-link">
                  <li>
                    <a href="#top" className="nav-links">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="nav-links">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#footer" className="nav-links">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container width-70">
        <div className="navbar">
          <h1>LOGO</h1>
          <ul className="nav-link">
            <a href="" className="nav-links">
              <li>Work</li>
            </a>
            <a href="" className="nav-links">
              <li>About</li>
            </a>
            <a href="" className="nav-links">
              <li>Work</li>
            </a>
          </ul>
        </div>
      </div> */}
    </>
  )
}

export default Navbar
