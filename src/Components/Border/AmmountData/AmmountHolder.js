import React from 'react';

import './AmmountHolder.css'

import TipAmmountPerson from './TipAmmountCalculation/TipAmmountPerson.js'
import TotalPerson from './TipAmmountCalculation/TotalPerson';
import ResetBtn from './TipAmmountCalculation/ResetBtn';
const AmmountHolder = (props) => {

    return (
        <div className='ammountHolder'>
            <TipAmmountPerson tipData={props.filledInfo}/>
            <TotalPerson personData={props.filledInfo}/>
            <ResetBtn resetData={props.dataReset} resetMergeCd={props.resetMerge} btnStatus={props.filledInfo}/>
        </div>
    )
}

export default AmmountHolder;