import React from 'react'
import {Element} from "react-scroll"
import './Contact.css'
import Img from './contact.png'
function Contact() {
  return (
    <Element className="contactcontainer" name="contact">
    <div className='container'>
      <div className='item'>
        <div className='contact'>
          <div className='left-text'>Let's work together</div>  
          <img src={Img} alt="contact" className='image'/>
        </div>
        <div className='submit-form'>
           <h5>Contact me</h5>
           <form>
           <div className='input-box'>
            <label>Name</label>
            <input type='text' className='input' required></input>
           </div>
           
           <div className='input-box'>
            <label>Email</label>
            <input type='email' className='input' required></input>
            </div>
           
           <div className='input-box'>
            <label>Leave your message here</label>
            <input type='text'  className='input1' required></input>
            </div><div>
            <input type="submit" className='btn'></input></div></form>
        </div>
        </div>
    </div></Element>
  )
}

export default Contact

