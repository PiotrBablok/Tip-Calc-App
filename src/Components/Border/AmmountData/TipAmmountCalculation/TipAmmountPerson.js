import React from 'react';

import './TipAmmountPerson.css'

const TipAmmountPerson = (props) => {

    const tip = props.tipData.price * (props.tipData.selectTip / 100);

    return (
        <div className='tipAmmount'>
            <div className='tipAmmount__person'>
                <h5>Tip Ammount</h5>
                <h6>/ person</h6>
            </div>
            {props.tipData.price < 1 ?
                <div className='tipAmmount__result'>$0.00</div> :
                <div className='tipAmmount__result'>{'$' + tip.toFixed(2)}</div>
            }
        </div>
    )
}

export default TipAmmountPerson;