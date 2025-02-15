import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const skills = [
  {name: 'HTML 5', level: 'Expert'},
  {name: 'CSS 3', level: 'Expert'},
  {name: 'Javascript', level: 'Experienced'},
  {name: 'Typescript', level: 'Experienced'},
  {name: 'Tailwind CSS', level: 'Intermediate'},
  {name: 'GIT', level: 'Expert'},
  {name: 'React js', level: 'Experienced'},
  {name: 'Redux', level: 'Expert'},
  {name: 'React Native', level: 'Begineer'},
  {name: 'React Query', level: 'Intermediate'},
]

const otherSkills = [
  {name: 'Node Js', level: 'Begineer'},
  {name: 'Graphql', level: 'Begineer'},
  {name: 'MongoDB', level: 'Begineer'},
  {name: 'Vercel', level: 'Intermediate'},
  {name: 'Bitbucket Pipeline', level: 'Intermediate'},
  {name: 'VS Code', level: 'Experienced'},

]

const Experience = () => {
  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              {skills.map(item => (<article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{item.name}</h4>
                  <small className='text-light'>{item.level}</small>
                </div>
              </article>))}
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Other Skills</h3>
            <div className="experience__content">

              {otherSkills.map(item => (<article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{item.name}</h4>
                  <small className='text-light'>{item.level}</small>
                </div>
              </article>))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience