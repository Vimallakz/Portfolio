import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me-new.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (


      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Vimalraj J</h1>
          <h5 className="text-light">Senior Frontend Engineer II</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>



  )
}

export default Header