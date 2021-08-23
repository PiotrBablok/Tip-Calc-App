import React from 'react';

import './ResetBtn.css';

const ResetBtn = (props) => {

    /* Uses the dataResetHandler function from the Border component to clear the DUMMY_DATA object. */
    function resetAll() {
        props.resetData({
            price: 0,
            selectTip: 0,
            numberOfPeople: 0,
        })
    }

    /* if() checks whether the user has entered a value and then activates the reset button to clear the data. Additionally, changing its color. */
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