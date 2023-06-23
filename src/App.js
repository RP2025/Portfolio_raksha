import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Timel from './components/Timel'
import Achievments from './components/EXPERIMENTING/Achievments';
import POSpage from './components/EXPERIMENTING/POSpage'
function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-show'>
     <Header />
      <Banner />
      <About />
      <Nav />
      <Services />
      <Achievments />  
      <POSpage />    
      {/* <Work /> */}

      {/* <Contact /> */}
      {/* <Timel /> */}
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
