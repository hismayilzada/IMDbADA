import React from 'react'
import UserInfo from '../../components/UserInfo/UserInfo'
import './AboutUs.scss'
import javid from '../../images/j.png';
import humay from '../../images/h.png';
import faraz from '../../images/f.png';
import FormInput from '../../components/FormInput/FormInput';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='aboutUsLeft'>
        <UserInfo imageValue={javid} name={'Javid'} surname={'Magsudov'} bio={`Hi, I am Javid. 3-year IT student at ADA University. 
        This is our IMDbADA project from the Web and Mobile course. In my free time, Playing a few musical instruments(Piano, guitar, etc.), 
        Rubik's Cube, Reading Books, Photo/Video Shooting and Editing, Gaming, Poker, and Phishing are my favorite 
        hobbies.`} link="https://mjakoo.github.io/" githubLink="https://github.com/MJakoo" />
        <UserInfo imageValue={humay} name={'Humay'} surname={'Ismayilzada'} bio={`Hi, I am Humay. I am a 3rd year IT student at ADA Univeristy. 
        This is our team project from Web and Mobile course personal webpage. I am interested in Cybersecurity. In my free time, I like to read 
        books(mostly dedective, action, and historical), watch films, learn new things, and
         cook.`} link="https://hismayilzada.github.io/" githubLink="https://github.com/hismayilzada" />
        <UserInfo imageValue={faraz} name={'Faraz'} surname={'Bagher Nezhad'} bio={`Hi, I am Faraz. I am student at ADA university, 
        my goal is being an perfect IT specialist. Besides that, I am working as accountant in a company to have experience in office 
        for my future.`} link="https://farazbagher.github.io/" githubLink="https://github.com/farazbagher" />
      </div>
      <div className='aboutUsRight'>
        <FormInput/>
      </div>
    </div>
  )
}

export default AboutUs

