import React from 'react'
import './FormInput.scss'
const FormInput = () => {
    return (
        <form className='formInAboutUs' action="http://localhost:3001/contacts"  method="POST" >
            <h1 className='formHeaderText'>Contact Us</h1>
            <input id='subject' type='text' placeholder='Subject' required="" />
            <input id='email' type='email' placeholder='Email' required="" />
            <div className='formBottom'>
                <input id='textMessage' type='text' placeholder='Message' required="" />
                <button className='formSendButton' type="submit">Send</button>
            </div>
        </form>
    )
}

export default FormInput
