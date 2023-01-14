import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/Hb1Copy.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from "react";
import { Link } from 'react-scroll'


const Intro =() => {
    

    const theme =useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hey! I Am</span>
                <span>Hansaka Biyon</span>
                <span>I'am Full Stack Developer</span>
            </div>

            <button className="button i-button">
            <Link spy={true} to='Contact' smooth={true}>
                Hire me
            </Link>  
            </button>
            <div className="i-icons">
                <a href='https://github.com/Biyon-IT21012860'>
                <img src={Github} alt="" />
                </a>
                <a href='https://www.linkedin.com/in/hansaka-biyon-70418423'>
                <img src={LinkedIn} alt="" />
                </a>
                <a href=''><img src={Instagram} alt="" />
                </a>
                
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <div style={{top:'5%',left:'63%'}}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1='Full Stack' txt2='Developer'/>
            </div>
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background:'#b9effa',
                top:'15rem',
                width:'21rem',
                height:'11rem',
                left:'-8rem'
                }}>

            </div>
        </div>

    </div>
    
  )
}

export default Intro