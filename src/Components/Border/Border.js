import React, { useState, useRef } from 'react';

import Card from '../Card/Card'
import AmmountHolder from './AmmountData/AmmountHolder';
import Bill from './TipData/Bill'
import SelectTip from './TipData/SelectTip'
import NumberOfPeople from './TipData//NumberOfPeople';

import './Border.css'

/* DUMMY_DATA stores in the object the data entered by the user into our application */
const DUMMY_DATA = {
    price: 0,
    selectTip: 0,
    numberOfPeople: 0,
};

/* Component Border is the main component that ties all the others together. */
const Border = (props) => {

    const [currentPrice, setCurrentPrice] = useState(DUMMY_DATA); /* Manages our data from the DUMMY_DATA object. */

    const billDragHandler = (billAmmount) => { /* Inserts nade from component Bill and combines it with an existing DUMMY_DATA object */
        setCurrentPrice(prevBill => {
            return Object.assign({}, prevBill, billAmmount);
        })
    };

    const pplDragHandler = (pplAmmount) => { /* Inserts nade from component NumberOfPeople and combines it with an existing DUMMY_DATA object */
        setCurrentPrice(prevPpl => {
            return Object.assign({}, prevPpl, pplAmmount);
        })
    };

    const tipDragHandler = (tipAmmount) => { /* Inserts nade from component SelectTip and combines it with an existing DUMMY_DATA object */
        setCurrentPrice(prevTip => {
            return Object.assign({}, prevTip, tipAmmount);
        })
    };

    const dataResetHandler = (resetedData) => { /* Provides data from the Border component via props to the AmmountHolder --> ResetBtn component, a function that clears the data that are passed to the DUMMY_DATA object */
        setCurrentPrice(resetedData);
    };


    /* useRef() allow you to call functions from the Bill, SelectTip 
    and NumberOfPeople components using the ResetBtn component that clears 
    the data entered into the <input> field. And they are passed as a resetMerge 
    array to the AmmountHolder --> ResetBtn. */
    const resetPpl = useRef();
    const resetBill = useRef();
    const resetTip = useRef();



    return (
        <Card>
            <div className='border'>
                <Bill dragAmmount={billDragHandler} ref={resetBill} />
                <SelectTip tipDrag={tipDragHandler} selectedTip={currentPrice} ref={resetTip} />
                <NumberOfPeople priceAmmount={currentPrice} dragPpl={pplDragHandler} ref={resetPpl} />
                <AmmountHolder dataReset={dataResetHandler} filledInfo={currentPrice} resetMerge={[resetPpl, resetBill, resetTip]} />
            </div>
        </Card>
    )
}

export default Border;