import React from 'react';
import Img from '../assets/avatar.png'

import {FaGithub ,FaLinkedinIn , FaMedium , FaTwitter} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return <section id = 'home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flec-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10'>
        <div className='flex-1 text-center font-secondary lg:text-left' >
          <motion.h1 
          variants={fadeIn('up' , 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
           className='text-[55px] font-bold leading-[1] lg:text-[100px]' >
            RAKSHA  <span>PAHARIYA</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up' , 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-6 text-[46px] lg:text-[60px] font-secondary font-bold uppercase leading-[1]'>
            <span className='text-white mi-4 '>I am a </span>
            <TypeAnimation sequence={[
              'Developer' , 
              2000, 
              'Coder', 
              2000 ,
              'ML enthusiast', 
              2000 ,
              'Philomath' , 
              2000]
              }
             speed={30} 
             className='text-accent'
             wrapper='span'
             repeat={Infinity}
            />
          </motion.div>
            <motion.p variants={fadeIn('up' , 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto'
            >
                
            I am currently a Pre Final Year Undergraduate pursuing my B.tech degree in Computer Science and Engineering from the Indian Institute of Engineering Science and Technology, Shibpur.
            I am a passionate to dive deep in tech world. You'll often find me immersed in the melodies of old hits during my free time.

            Happy Coding!!
            </motion.p>
            <motion.div variants={fadeIn('up' , 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button>
               <a href='#' className='flex text-[20px] text-gradient btn-link'>
                  Resume
                  <br />
                </a>
                {/*social*/}
                <div className='flex text-[20px] gap-x-8 max-w-max mx-auto lg:max-0'>
                  <a href='https://www.linkedin.com/in/raksha-pahariya-409842227/' target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href='https://github.com/RP2025' target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href='https://medium.com/@rakshapahariya' target="_blank" rel="noreferrer"> 
                    <FaMedium />
                  </a>
                  <a href='https://twitter.com/philomath128' target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </button>  
            
          </motion.div>
        </div>
        
        <motion.div variants={fadeIn('down' , 0.5)}
            initial='hidden'
            whileInView={'show'}
            >
          <img src={Img} alt='' />
        </motion.div>
      </div>
    </div>
  
  </section>;
};

export default Banner;
