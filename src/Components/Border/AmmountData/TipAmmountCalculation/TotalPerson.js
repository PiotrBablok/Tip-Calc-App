import React from 'react';

import './TotalPerson.css';

const TotalPerson = (props) => {

    const entireTip = (props.personData.price * (props.personData.selectTip / 100)) / props.personData.numberOfPeople;

    return (
        <div className='total'>
            <div className='total__person'>
                <h5>Total</h5>
                <h6>/ person</h6>
            </div>
            {isNaN(entireTip) || entireTip === Infinity ?
                <div className='total__result'>$0.00</div> :
                <div className='total__result'>{'$' + entireTip.toFixed(2)}</div>
            }
        </div>
    )
}

export default TotalPerson;