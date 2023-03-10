import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer=()=> {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>hansakabiyon@icloud.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <a href='https://www.linkedin.com/in/hansaka-biyon-70418423'>
                <Linkedin color='white' size='3rem'/>
                </a>
                <a href='https://github.com/Biyon-IT21012860'>
                <Github color='white' size='3rem'/>
                </a>

            </div>

        </div>
    </div>
  )
}

export default Footer