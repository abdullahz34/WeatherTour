import React from 'react';
import './Header.css';

import wt_logo from '../Assets/wt-logo.png'

const Header = () => {
  return (
    <div className='container2'>
        <div className="logo">
            <img src= {wt_logo} alt = 'logo' />
        </div>
        <ul>
            <li>Something</li>
            <li>Settings</li>
        </ul>
    </div>
  )
}

export default Header
