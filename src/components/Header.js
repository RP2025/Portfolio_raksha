import React from 'react';
import Logo from '../assets/logo.png'
const Header = () => {
  return <header className='py-0'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt="logo" width={100} height={0} />
        </a>
        {/* button */}
        <button className='btn btn-sm2'> Contact Me </button>

      </div>
    </div>
  
  </header>;
};

export default Header;
