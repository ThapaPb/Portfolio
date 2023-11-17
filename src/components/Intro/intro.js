import React from 'react'
import './intro.css';
import bg from '../../resources/bg.png';
import btnImg from '../../resources/hire.png';

import { Link } from 'react-scroll'



const Intro = () => {
  return (
    <section id='intro'>
       <div className='introContent'>
        <span className='hello'>HELLO WORLD!</span>
        <span className='introText'>I'm <span className='introName'>Prabigya </span>
        <br/>Computer Programmer.
        </span>
        <p className="introPara">I am a skilled Java programmer with expereince and interest in creating software with intutitive design, accesible user interface and creative approch to solving problems. Plus a fun, aesthetic visual experience that strives towards beauty.</p>       
        <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me!</button></Link>
       </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;