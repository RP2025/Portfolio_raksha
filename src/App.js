import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import backgroundImage from './assets/site-bg3.jpg'
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
const appStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0.4, 0.2 ), rgba(0, 0, 0, 1)),  url(${backgroundImage})`,
  backgroundSize: 'cover', // You can adjust these properties as needed
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left',
};


  return (
    <div style={appStyle}>
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
      <div></div>
    </div>
  );
}

export default App;
