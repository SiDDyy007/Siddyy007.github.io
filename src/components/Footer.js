import React from 'react';
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css'

export const Footer = () => {
  return (

    <div className = 'footer'>
        <div className='socialMedia'> 
            <EmailIcon />
            <LinkedInIcon />
            <GithubIcon />            
        </div>
        <p> &copy; 2023 Siddyy007.github.io</p>
    </div>
  )
}

export default Footer;