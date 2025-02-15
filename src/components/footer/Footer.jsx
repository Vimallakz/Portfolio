import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>VIMALRAJ J</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/vimalraj-j-634606105/"><BsLinkedin/></a>
          <a href="https://github.com/vimallakz"><BsGithub/></a>
          <a href="https://stackoverflow.com/users/10948261/vimalraj" target="_blank" rel='noreferrer'><BsStackOverflow/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Vimalraj J. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer