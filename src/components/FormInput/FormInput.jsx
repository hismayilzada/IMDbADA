import React from 'react'
import './FormInput.scss'
import { useState } from "react";
export default function FormInput(){

    const [subject, setSubject] = useState();
    const [ email, setEmail] = useState();
    const [ message, setMessage] = useState();
        
    function handleSubmit(event){
        event.preventDefault();
        let Form={ subject, email, message };
        fetchMessage(Form);
    }

    function fetchMessage(Form){
        fetch("http://localhost:4000/messages",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(Form)
        })
    }

    return (
        <form className='formInAboutUs' onSubmit={ handleSubmit } >
            <h1 className='formHeaderText'>Contact Us</h1>
            <input id='subject' value={ subject } onChange={e => setSubject(e.target.value)} type='text' placeholder='Subject' required="" />
            <input id='email' value={ email } onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' required="" />
            <div className='formBottom'>
                <input id='textMessage' value={ message } onChange={e => setMessage(e.target.value)} type='text' placeholder='Message' required="" />
                <button className='formSendButton'>Send</button>
            </div>
        </form>
    )
}

