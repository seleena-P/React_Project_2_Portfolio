import React from 'react'
import automation from "./automation.PNG";
import bent from "./bentley.PNG";
import celonis from "./celoniscert.PNG";
import azure from "./msazure.PNG";
import ui from "./ui.PNG";
import './Certifications.css'
import {Element} from "react-scroll"
function Certifications() {
  return (
    <Element name="certifications">
    <div className='outer-box'>
        <h2 className='heading'>Certificitions and Licenses</h2>
        <div className='cert-container'>
            <div className='cert-box'>
              <img src={celonis} alt=" "></img>
              <div className='cert-layer'>
                  <h4>Process automation</h4>
                  <p>issued at September,2022</p>
              </div>
            </div>
            <div className='cert-box'>
              <img src={bent} alt=" "></img>
              <div className='cert-layer'>
                  <h4>Mathwork</h4>
                  <p>issued at September,2022</p>
              </div>
            </div>
            <div className='cert-box'>
              <img src={azure} alt=" "></img>
              <div className='cert-layer'>
                  <h4>MS Azure</h4>
                  <p>issued at September,2022</p>
              </div>
            </div>
            <div className='cert-box'>
              <img src={automation} alt=" "></img>
              <div className='cert-layer'>
                  <h4>Automation</h4>
                  <p>issued at September,2022</p>
              </div>
            </div>
            

        </div>
    </div></Element>
  )
}

export default Certifications