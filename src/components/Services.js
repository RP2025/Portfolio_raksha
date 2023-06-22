import React from 'react';

import './Services.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
 import 'swiper/css';


const Services = () => {
  
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    fontSize: 50
  };

  return (
<section>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <h4 style={styles} className='font-bold btn2 btn2-sm3 ' >
      MY BLOGS <br />
    </h4>
    </div>
    <div>
      <h1>
        <br />
      </h1>
    </div>
  
      <Swiper className= "Testimonial_container"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
     <SwiperSlide className= "single_testimonial ">
        <a href='https://medium.com/@rakshapahariya/my-experience-of-the-product-led-growth-cohort-2023-by-the-product-folks-b3898e8cfa6f' target="_blank" rel="noreferrer" className='btn btn-sm2'>
          <h1 > 
          My experience of the “Product Led Growth” Cohort 2023 by “The Product Folks”
          </h1> 
        </a>
        
      </SwiperSlide>
      <SwiperSlide className= "single_testimonial">
        <a href='https://medium.com/@rakshapahariya/how-did-i-get-chosen-for-the-google-powered-talentsprint-women-engineers-we-program-in-my-first-d1e8d7356292' target="_blank" rel="noreferrer" className='btn btn-sm2'>
          <h1 > 
          How did I get chosen for the Google-powered TalentSprint Women Engineers (WE) Program in my first semester?</h1> 
        </a>
        
      </SwiperSlide>
      <SwiperSlide className= "single_testimonial">
        <a href='https://medium.com/@rakshapahariya/some-cool-microsoft-technologies-for-the-future-e4c3c58b3f69' target="_blank" rel="noreferrer" className='btn btn-sm2'>
          <h1 > 
          Some COOL Microsoft Technologies for the leading future</h1> 
        </a>
        
      </SwiperSlide>
      

    </Swiper>
    </section>
  );
}
export default Services;
