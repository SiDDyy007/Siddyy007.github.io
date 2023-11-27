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
          <a href="mailto:siddhant.poojary@ucr.edu"><EmailIcon /></a>
          <a href="https://www.linkedin.com/in/sid207/"><LinkedInIcon /></a>
          <a href="https://github.com/SiDDyy007"><GithubIcon /></a>
        </div>
      </div>
      <div className='skills'> 
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Programming Languages</h2>
            <span>Python, JavaScript, TypeScript, Golang, MySQL, C++, MATLAB, LangChain </span>
          </li>
          <li className='item'>
            <h2> Frameworks & Databases</h2>
            <span>React, NodeJS, MongoDB, DynamoDB, Express, PostgreSQL, Nextflow, Flask</span>
          </li>
          <li className='item'>
            <h2>Developer Tools</h2>
            <span>Amazon Web Services (AWS), Docker, Git, Visual Studio, Jupyter, JIRA, Confluence</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home