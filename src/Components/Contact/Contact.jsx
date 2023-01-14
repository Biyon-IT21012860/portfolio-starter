import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import {themeContext} from '../../Context'
import { useContext } from "react";

const Contact=()=> {
  
    const form = useRef();
    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vfrsi0v', 'template_xupisom', form.current, 'pxNENmnwyNbYZLrXt')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  const theme =useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur2" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" classname="user" placeholder="Name" />
                <input type="email" name="user_email" classname="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Thanks for contactin me !"}</span>
                <div className="blur s-blur" style={{background: "var(--purple)"}}></div>

            </form>
        </div>

    </div>
  )
}

export default Contact