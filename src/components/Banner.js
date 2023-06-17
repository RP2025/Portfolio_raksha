import React from 'react';
import Img from '../assets/avatar.png'

import {FaGithub ,FaLinkedinIn , FaMedium} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return <section id = 'home' className='section'>
    <div className='container mx-auto'>
      <div>
        <div>
          <h1>
            RAKSHA  <span>PAHARIYA</span>
          </h1>
          <div className='mb-6 text-[46px] lg:text-[60px] font-secondary font-bold uppercase leading-[1]'>
            <span className='text-white mi-4'>I am a </span>
            <TypeAnimation sequence={[
              'Software Developer' , 
              2000, 
              'Designer' , 
              2000, 
              'Coder', 
              2000 ,
              'ML enthusiastic', 
              2000 ,
              'Philomath' , 
              2000]
              }
             speed={30} 
             className='text-accent'
             wrapper='span'
             repeat={Infinity}
            />
          </div>
          <div>
            <p>
            I am currently a Pre Final Year Undergraduate pursuing my B.tech degree in Computer Science and Engineering from the Indian Institute of Engineering Science and Technology, Shibpur.
            I am a passionate to dive deep in tech world. You'll often find me immersed in the melodies of old hits during my free time.

            Happy Coding!!
            </p>
          </div>
        </div>
        <div>
          <img src={Img} alt='' />
        </div>
      </div>
    </div>
  
  </section>;
};

export default Banner;
