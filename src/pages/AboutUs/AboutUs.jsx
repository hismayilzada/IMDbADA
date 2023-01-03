import React from 'react'
import UserInfo from '../../components/UserInfo/UserInfo'
import './AboutUs.css'
import javid from '../../images/j.png';
import humay from '../../images/h.png';
import faraz from '../../images/f.png';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='aboutUsLeft'>
        <UserInfo imageValue={javid} name={'Javid'} surname={'Magsudov'} bio={'I am Javid'} link="https://mjakoo.github.io/" githubLink="https://github.com/MJakoo" />
        <UserInfo imageValue={humay} name={'Humay'} surname={'Ismayilzada'} bio={'I am Humay.'} link="https://hismayilzada.github.io/" githubLink="https://github.com/hismayilzada" />
        <UserInfo imageValue={faraz} name={'Faraz'} surname={'Bagher Nazhed'} bio={'I am Faraz'} link="https://farazbagher.github.io/" githubLink="https://github.com/farazbagher" />
      </div>
      <div className='aboutUsRight'>

      </div>
    </div>
  )
}

export default AboutUs
