import React from 'react'
import MultipleWatch from '../assets/about.jpeg'
import '../styles/About.css'

export default function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultipleWatch})`}}>
        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>When it comes to buying pre-owned luxury watches, authenticity is key. That's why you can trust Zurich to deliver the real deal. Their team of experts carefully inspect and authenticate each watch before it's listed for sale, so you can rest assured that you're getting a genuine timepiece.
            </p>
        </div>
      
    </div>
  )
}
