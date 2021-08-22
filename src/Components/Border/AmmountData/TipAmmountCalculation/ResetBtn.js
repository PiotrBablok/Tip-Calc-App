import React from 'react';

import './ResetBtn.css';

const ResetBtn = (props) => {

    function resetAll() {
        props.resetData({
            price: 0,
            selectTip: 0,
            numberOfPeople: 0,
        })
    }

    if (props.btnStatus.price !== 0 ||
        props.btnStatus.selectTip !== 0 ||
        props.btnStatus.numberOfPeople !== 0) {

        return (
            <div className='btn'>
                <button onClick={() => {
                    resetAll();
                    props.resetMergeCd[0].current.resetPpl();
                    props.resetMergeCd[1].current.resetBill();
                    props.resetMergeCd[2].current.resetTip();
                }} className='btn__reset'>RESET</button>
            </div>
        )
    } else {
        return (
            <div className='btn'>
                <button className='btn__standard'>RESET</button>
            </div>
        )
    }
}

export default ResetBtn;