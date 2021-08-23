import React from 'react';

import './AmmountHolder.css'

import TipAmmountPerson from './TipAmmountCalculation/TipAmmountPerson.js'
import TotalPerson from './TipAmmountCalculation/TotalPerson';
import ResetBtn from './TipAmmountCalculation/ResetBtn';

/* AmmountHolder serves us as the parent component for the TipAmmountPerson, TotalPerson, ResetBtn components. */
const AmmountHolder = (props) => {

    return (
        <div className='ammountHolder'>
            <TipAmmountPerson tipData={props.filledInfo} />
            <TotalPerson personData={props.filledInfo} />
            <ResetBtn resetData={props.dataReset} resetMergeCd={props.resetMerge} btnStatus={props.filledInfo} />
        </div>
    )
}

export default AmmountHolder;