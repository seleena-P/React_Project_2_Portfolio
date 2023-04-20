import React from 'react'
import {Element} from "react-scroll"
//import LinearProgress from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
//import Divider from '@mui/material/Divider';
import './Skill.css'
function Skill() {
  return (
       <Element  name="skills">
        <div className="skillcontainer">
          <div className='innerbox'>
        <div className='soft'>
          <div className='soft-text'>
          <h2>My Skillset</h2>
          <h4>As a skilled individual with a passion for technology and with my diversified skill set, I am confident in my ability to take on any tech challenge and deliver high-quality results.</h4>
          </div>
          {/* <Divider orientation="vertical" flexItem>h</Divider> */}
        </div>
         <div className="skillcontainer-text">
          <h2>SKILLS</h2>
             <div className='skillsetcontainer'>
              <h5>React</h5>
              <div className='skillcontainer-slider skillcontainer-slider1'>
                <LinearProgress variant="determinate" value={60}/>
              </div>
              <h5>Cpp</h5>
              <div className='skillcontainer-slider skillcontainer-slider2'>
                <LinearProgress variant="determinate" value={70}/>
              </div>
              <h5>HTML</h5>
              <div className='skillcontainer-slider skillcontainer-slider3'>
                <LinearProgress variant="determinate" value={80}/>
              </div>
              <h5>MySQL</h5>
              <div className='skillcontainer-slider skillcontainer-slider4'>
                <LinearProgress variant="determinate" value={60}/>
                
              </div>
              </div>
             </div>
         </div></div>
       </Element>


  
  )
}

export default Skill

