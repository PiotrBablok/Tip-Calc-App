import React from 'react';

import './Card.css'
import Logo from '../../Media/logo.svg'

const Card = (props) => {
    
    return (
        <div className='card'>
            <img className='logo' src={Logo} alt='logo' />
            {props.children}
        </div>
    )
}

export default Card;