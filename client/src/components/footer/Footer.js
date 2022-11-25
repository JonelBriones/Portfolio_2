import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="container width-70">
      <div className="footer" id="footer">
        <div>
          <form onSubmit={''}></form>
          <div className="links">
            <a href="https://github.com/JonelBriones" target="_blank">
              <AiFillGithub size="3em" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonel-briones-64bb8521b/"
              target="_blank">
              <AiFillLinkedin size="3em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
