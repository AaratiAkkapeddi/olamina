import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <div id="contact">
      <div className="contact-top">
        <h2>Tribute to Octavia Butler</h2>
          <p className="body-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet leo turpis. Aenean tincidunt nisl nibh, eget accumsan orci feugiat vitae. Vivamus eget risus nec odio aliquam interdum eu eget nulla. Sed posuere, risus nec consequat mattis, orci lorem pulvinar quam, non hendrerit nisi neque id metus. Vestibulum fermentum aliquam metus quis pharetra. Aliquam aliquet lorem id ultrices vulputate. Sed interdum mi sed lectus lacinia faucibus. </p>
      </div>
      <div className="contact-mid">
        <h2 className="contact-title">Stay Updated.</h2>
      </div>
      <div className="contact-btm">
          <p className="contact-msg">Please contact us to stay in touch</p>
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
    </div>
  )
}

export default Contact