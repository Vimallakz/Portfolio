import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const HeaderSocials = () => {
  return (

    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vimalraj-j-634606105/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/vimallakz" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://stackoverflow.com/users/10948261/vimalraj" target="_blank" rel='noreferrer'><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials