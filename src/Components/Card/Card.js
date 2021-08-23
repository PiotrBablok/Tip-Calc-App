import React from 'react';

import './Card.css'
import Logo from '../../Media/logo.svg'

/* The Card component is responsible for maintaining the background and our application. */

const Card = (props) => {

    
    return (
        <div className='card'>
            <img className='logo' src={Logo} alt='logo' />
            {props.children}
        </div>
    )
}

export default Card;