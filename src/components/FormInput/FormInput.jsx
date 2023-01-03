import React from 'react'
import './FormInput.scss'
const FormInput = () => {
    return (
        <form className='formInAboutUs' action=''>
            <h1 className='formHeaderText'>Form</h1>
            <input id='subject' type='text' placeholder='Subject' />
            <input id='email' type='email' placeholder='Email' />
            <div className='formBottom'>
                <input id='textMessage' type='text' placeholder='Message' />
                <button className='formSendButton' type="submit">Send</button>
            </div>
        </form>
    )
}

export default FormInput
