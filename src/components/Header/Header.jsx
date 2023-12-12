import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div>
      <div className="header">

      <img src={Logo} className='logo' alt=""/>

    <ul className='header-menu'>

        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testtimonials</li>

    </ul>
 

      </div>
    </div>
  )
}


export default Header
