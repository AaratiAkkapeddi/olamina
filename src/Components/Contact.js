import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <div className="contact">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-msg">Please reach out to us to stay in touch</p>
        <div id="ola-form">
        <div className="form-field">
            <input
            type="email"
            placeholder="your email"
            />
            <label className="p-small" htmlFor="email">email</label>
        </div>
        <button className="btn-0" id="submit">SUBMIT</button>
        <div id="message">
            
        </div>
        </div>
    </div>
  )
}

export default Contact