import React, { useState, useRef } from 'react';

import Card from '../Card/Card'
import AmmountHolder from './AmmountData/AmmountHolder';
import Bill from './TipData/Bill'
import SelectTip from './TipData/SelectTip'
import NumberOfPeople from './TipData//NumberOfPeople';

import './Border.css'

const DUMMY_DATA = {
    price: 0,
    selectTip: 0,
    numberOfPeople: 0,
};



const Border = (props) => {

    const [currentPrice, setCurrentPrice] = useState(DUMMY_DATA);

    const billDragHandler = (billAmmount) => {
        setCurrentPrice(prevBill => {
            return Object.assign({}, prevBill, billAmmount);
        })
    };

    const pplDragHandler = (pplAmmount) => {
        setCurrentPrice(prevPpl => {
            return Object.assign({}, prevPpl, pplAmmount);
        })
    };

    const tipDragHandler = (tipAmmount) => {
        setCurrentPrice(prevTip => {
            return Object.assign({}, prevTip, tipAmmount);
        })
    };

    const dataResetHandler = (resetedData) => {
        setCurrentPrice(resetedData);
    };

    const resetPpl = useRef();
    const resetBill = useRef();
    const resetTip = useRef();



    return (
        <Card>
            <div className='border'>
                <Bill dragAmmount={billDragHandler} ref={resetBill} />
                <SelectTip tipDrag={tipDragHandler} selectedTip={currentPrice} ref={resetTip}  />
                <NumberOfPeople priceAmmount={currentPrice} dragPpl={pplDragHandler} ref={resetPpl} />
                <AmmountHolder dataReset={dataResetHandler} filledInfo={currentPrice} resetMerge={[resetPpl, resetBill, resetTip]} />
            </div>
        </Card>
    )
}

export default Border;