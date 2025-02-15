import React from 'react'
import './about.css'
import myImage from '../../assets/me-new.png'
import {GiGraduateCap} from 'react-icons/gi'
import {BsCash} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Vimalraj J</h5>
                  <small>React | Javascript | Typescript | Redux | Zustand</small>
              </article>

              <article className='about__card'>
                  <BsCash className='about__icon'/>
                  <h5>Current CTC</h5>
                  <small>33LPA</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>B2B / B2C</h5>
                  <small>
                    <ul>
                      <li>ECommerce</li>
                      <li>Healthcare</li>
                      <li>Recruiting</li>
                    </ul>
                  </small>
              </article>



            </div>
            <p>

                <div>
                  <p>⭐️ Top-tier developer with extensive work experience in JavaScript web frameworks(React, GraphQL, TypeScript, JavaScript etc)</p>
                  <p>⭐️ Want a website that people love? Let's talk! I can help you from start to finish.</p>
                  <p>⭐️ Share your vision, and I'll turn it into a reality. I'll provide a clear plan and estimate.</p>
                </div>

              <p> &#10145; About me</p>
              <div style={{ marginLeft: '24px' }}>
                <p>✅ 8+ years of experience in developing React apps</p>
                <p>✅ 15+ medium/large scale web apps developed in React.</p>
                <p>✅ Firebase mastery: from setup to cost-saving strategies</p>
                <p>✅ I create websites that are easy to use and look fantastic</p>
              </div>

              <p> &#10145; Expertise in</p>
              <div style={{ marginLeft: '24px' }}>
                <p>✮ React: Proficient in building engaging and interactive user interfaces using React.</p>
                <p>✮ Redux: Skilled in implementing Redux for state management in complex applications.</p>
                <p>✮ JavaScript/TypeScript: Experienced in both JavaScript and TypeScript to develop robust and scalable solutions.</p>
                <p>✮ Web Development: Well-versed in modern web development practices, including HTML, CSS, and JavaScript frameworks.</p>
                <p>✮ Additional Skills: Familiarity with tools like Figma, Tailwind CSS, and Firebase to enhance productivity and deliver high-quality results.</p>
              </div>
            </p>
          </div>
      </div>
    </section>
  )
}

export default About