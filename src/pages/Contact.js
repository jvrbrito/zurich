import React from 'react'
import WristWatch from "../assets/contact.jpg"
import "../styles/Contact.css"


export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'style={{backgroundImage:`url(${WristWatch})`}}></div>
      <div className='rightSide'>
      <h1> Contact Us</h1>

<form id="contact-form" method="POST">
  <label htmlFor="name">Full Name</label>
  <input name="name" placeholder="Enter full name..." type="text" />
  <label htmlFor="email">Email</label>
  <input name="email" placeholder="Enter email..." type="email" />
  <label htmlFor="message">Message</label>
  <textarea
    rows="6"
    placeholder="Enter message..."
    name="message"
    required
  ></textarea>
  <button type="submit"> Send Message</button>
</form>
<ul>
<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
<i class="fa-brands fa-facebook"></i>
</a>
<a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
<i class="fa-brands fa-tiktok"></i>
</a>
<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
<i class="fa-brands fa-instagram"></i>
</a>
</ul>
      </div>
    </div>
  )
}
