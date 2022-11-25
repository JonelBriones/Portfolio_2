import React from 'react'
import './header.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact, FaNode } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'

const Header = () => {
  return (
    <>
      <header id="showcase">
        <div className="container showcase-container">
          <div className="hero">
            <p>
              Hello I'm Jonel, a self taught front-end developer based in <br />{' '}
              San Francisco. <br />
            </p>
            {/* <div>
              Hello, I'm
              <span className="name"> Jonel</span>
              <br /> a front-end developer.
            </div> */}
            <a href="#projects">
              <button>View my work</button>
            </a>
          </div>
          <div className="white-line" />
          <div className="tools">
            <SiMongodb size="4em" />
            <FaReact sie="4em" />
            <SiExpress size="4em" />
            <FaNode size="4em" />
            <AiFillHtml5 size="4em" />
          </div>
        </div>
      </header>
      {/* <div className="container ">
        <div className="header" id="header">
          <div className="hero">
            <div>
              Hello, I'm
              <span className="name"> Jonel</span>
              <br /> a front-end developer.
            </div>
            <a href="#body">
              <button>See my work</button>
            </a>
          </div>
          <div className="white-line" />
          <div className="tools">
            <a href="">
              <AiFillGithub size="4em" />
            </a>
            <a href="">
              <SiMongodb size="4em" />
            </a>
            <a href="">
              <FaReact size="4em" />
            </a>
            <a href="">
              <SiExpress size="4em" />
            </a>
            <a href="">
              <FaNode size="4em" />
            </a>
            <a href="">
              <AiFillHtml5 size="4em" />
            </a>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Header
