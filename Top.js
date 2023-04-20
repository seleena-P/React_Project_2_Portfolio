import React from 'react'
import {Element} from "react-scroll"
import './Top.css'
import Me from './me.png'
function Top() {
  return (
    <Element name="about" className='topcontainer'>
      <div className='topcontent-container'>
        <div className='top-left'>
            <h2>Hello ! I am  Seleena</h2>
            <h4>a budding engineer who is passionate about improving the world around</h4>
        </div>
        <div className='top-right'>

                <img src={Me} alt=" " className='myimage'/>
            </div>
        {/* <img src="https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg.webp" alt=""/> */}
        
        
      </div>
    </Element>
  )
}

export default Top