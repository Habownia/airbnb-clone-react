import React from 'react';

import logo from '../img/logo.svg';

export default function Nav(){
    return(
        <nav>
            <img src={logo} alt="logo" className='nav--logo'/>
        </nav>  
    )
}