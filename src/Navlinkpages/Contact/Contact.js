import React from 'react';
import "../Contact/Contact.css";

function Contact() {
  return (
    <div>
      <div className='contact-header'>
      <img id='contact-img' src={require("../../images/HairImages/hairimg-top.png")} />
      <div className='contact-text'>
      <h1>We’re here for you.</h1>
      <p>
        Have a question, or want a product recommendation? Get in touch—we’re happy to help.
      </p>
      </div>

      <form className='contact-form'>
        <div className='input-toprow'>
          <div className="input-path">
            <input className='input1' type='text' required />
            <label for=''>Name</label>
          </div>
          <div className="input-path">
            <input className='input2' type='email' required />
            <label for=''>Email *</label>
          </div>
        </div><br/>
          <div className="input-path">
          <input className='input3' type='text' required />
          <label for=''>Phone number</label>
          </div><br/>
          <div className="input-path">
          <textarea typeof='text' required ></textarea>
          <label for=''>Comment</label>
          </div>
          <button className='con-btn' type='sumbit'>Send</button>
      </form>

      </div>
    </div>
    
  )
}

export default Contact;