import React from 'react'
import './projects.css'
const Projects = () => {
  let projects = [
    {
      name: 'Connect Four',
      liveURL: 'https://connect-four-game-jb.netlify.app/',
      codeURL: 'https://github.com/JonelBriones/Connect-Four',
      picture: './images/connect-four.png',
      tools: ['JavaScript', 'HTML', 'CSS', 'React'],
      post: 'A connect four game that features playing against local, computer, and online multiplayer!',
    },
    {
      name: 'To Do List',
      liveURL: 'https://simpletodolist-jb.netlify.app/',
      codeURL: 'https://github.com/JonelBriones/SimpleNotes',
      picture: './images/to-do-list.png',
      tools: ['JavaScript', 'HTML', 'CSS', 'React'],
      post: `Create quick to do's, when finished you can discard them!`,
    },
    {
      name: 'Boba Shop',
      liveURL: 'https://boba-online-jb.netlify.app/',
      codeURL: 'https://github.com/JonelBriones/Boba_Online',
      picture: './images/boba-shop.png',
      tools: ['JavaScript', 'HTML', 'CSS', 'React'],
      post: 'A Boba site where you can order and customize drinks, make sure to tip!',
    },
  ]
  return (
    <>
      <h1 id="projects">Projects</h1>
      <div className="projects">
        <div className="project-container">
          {projects.map(
            ({ name, picture, liveURL, codeURL, tools, post }, idx) => {
              return (
                <div key={idx} className="project">
                  <img src={picture} alt="" />
                  <div className="info">
                    <h4>{name}</h4>
                    <p>{post}</p>
                    <div className="button-container">
                      <a href={liveURL} target="_blank">
                        <button>LIVE</button>
                      </a>
                      <a href={codeURL} target="_blank">
                        <button>CODE</button>
                      </a>
                    </div>
                    <div className="tools-container">
                      {tools.map((tool, idx) => (
                        <span key={idx} className="tool">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
