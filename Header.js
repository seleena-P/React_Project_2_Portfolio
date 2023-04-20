import React from 'react'
import { Link } from 'react-scroll'
//import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
             <h1><span className='a'>C</span>ely</h1>
        </div>
        <div className='header-right'>
             <Link to="about" smooth={true} duration={450}>
                <h5>About</h5>
             </Link>
             <Link to="skills" smooth={true} duration={450}>
                <h5>Skills</h5>
             </Link>
             <Link to="certifications" smooth={true} duration={450}>
                <h5>Certifications</h5>
             </Link>
             <Link to="contact" smooth={true} duration={450}>
                <h5>Contact</h5>
             </Link>
             
        </div>

    </div>
  )
}

export default Header