import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css"

function Home() {
  return (

    <div className='home'>
      <div className='about'>
        <h2>Welcome to Siddhant's Portfolio</h2>
        <div className='prompt'> 
          <p>Passionate Software Engineer and Problem-solver :) </p>
          <EmailIcon />
          <LinkedInIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'> 
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span> React, Redux, CSS, React Native</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span> NodeJS, MongoDB, ExpressJS, Flask</span>
          </li>
          <li className='item'>
            <h2> Programming Languages</h2>
            <span>Python, JavaScript, C++, HTML</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home