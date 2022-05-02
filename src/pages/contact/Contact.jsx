import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact">
        <div className="pic"></div>
        <div className="form">
          <h1>Contact Us</h1>
          <form className='formon'>
            {/* <label htmlFor="name">Full Name:</label> */}
            <input type="text" placeholder='Your Full Name' required/>
            {/* <label htmlFor="email">Email Address:</label> */}
            <input type="email" placeholder='Your Email Address:' required/>
            {/* <label htmlFor="message">Message:</label> */}
            <textarea name="message" placeholder='Your message here...' required></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact