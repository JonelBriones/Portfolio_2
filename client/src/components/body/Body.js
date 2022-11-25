import React from 'react'
import './body.css'
import Projects from './projects/Projects'
const Body = () => {
  return (
    <div className="container-body">
      <div className="container width-70">
        <div className="body">
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default Body
