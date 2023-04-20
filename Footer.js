import {LinkedIn, Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className='f'>
          <div className='inner'>
          <center>
            <h5>Connect with me</h5>
            <a href="https://www.facebook.com/profile.php?id=100092220544298"><Facebook className='icon'></Facebook></a>
            <a href="https://www.instagram.com/"><Instagram className='icon'> </Instagram></a>
            <a href="https://twitter.com/login?lang=en"><Twitter className='icon'></Twitter></a>
            <a href="https://www.linkedin.com/in/seleena-p-752445225"><LinkedIn className='icon'></LinkedIn></a>
            <p>
                Contact: 7550256897
            </p></center></div>
        </div>
    </footer>
  )
}

export default Footer
 