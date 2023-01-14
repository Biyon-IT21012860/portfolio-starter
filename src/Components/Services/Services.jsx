import React from 'react'
import './Services.css'
import Db from "../../img/db.png";
import Dev from "../../img/developer.png";
import Ui from "../../img/ui.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from "react";

const Services =()=> {
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="awesome"> {/*Left side*/}
        <span style={{color:darkMode?'white':''}}>My Awesome</span>
        <span>Services</span>
        <span>
            lorumsjsbajdbskc jcdkcnfswbfvrjivnfskvnjksv udsiufdijnsfijgnegnviehguiegdvs
            <br/>
            sciabhfiwfcbhdkjscbdubajkja
        </span>

        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur2" style={{background: "#ABF1FF94"}}></div>
        <div className="blur s-blur" style={{background: "var(--purple)"}}></div>
        </div>
        <div className="cards"> {/*Right side*/}
        
            <div style={{left:'20rem'}}>
                <Card
                emoji={Db}
                heading={'Database'}
                detail={"MySQL,MS SQL,MongoDB"}
                />
            </div>
            <div style={{top:'12rem',left:'2rem'}}>
                <Card
                emoji={Dev}
                heading={'Developer'}
                detail={"Js,React,Java"}
                />
            </div>
            <div style={{top:'19rem',left:'18rem'}}>
                <Card
                emoji={Ui}
                heading={'UX/UI'}
                detail={"Loreumdnncd djsncdja"}
                />
            </div>
            

        </div>
    </div>
  )
}

export default Services