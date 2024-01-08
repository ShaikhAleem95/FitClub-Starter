import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

import Bars from '../../assets/bars.png'


const Header = () => {

  const mobile = window.innerWidth <=768 ? true:false;
  const [menuOpened,setMenuOpened]=useState(false)

  return (
    <div>
      <div className="header">

      <img src={Logo} className='logo'  />

      {(menuOpened===false && mobile===true)? (
      <div><img src={Bars} alt='' style={width:1.5rem} /></div>
      ):
      
        (
       <ul className='header-menu'>

<li>Home</li>
<li>Programs</li>
<li>Why Us</li>
<li>Plans</li>
<li>Testtimonials</li>

</ul>
 
     )}
      </div>
    </div>
  )
}


export default Header
