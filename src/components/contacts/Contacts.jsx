import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    debugger;
    // emailjs.sendForm('service_9uysday', 'template_caz426s', form.current, '386nwJA6Tnhrb6U1j')
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vimallakz@gmail.com</h5>
            <a href="mailto:vimallakz@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required minLength="3" pattern="\S.*" />
          <input type="email" name='email' placeholder='Your Email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          <textarea name="message" rows="7" placeholder='Your Message' required minLength="5"></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts