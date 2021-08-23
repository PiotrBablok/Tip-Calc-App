import React, { useState, forwardRef, useImperativeHandle } from 'react';

import './SelectTip.css'

/* TIP_PERCENT I'm holding an array with an object that I'll later use to render a <button> with the appropriate percentage value. */
const TIP_PERCENT = [
    { tip: 5 },
    { tip: 10 },
    { tip: 15 },
    { tip: 25 },
    { tip: 50 },
]


const SelectTip = forwardRef((props, ref) => {

    /* Deals with displaying a custom field for entering a percentage value. */
    const [customStatus, newCustomStatus] = useState(false);

    /* Collects data entered by the user. */
    const [currentTip, setNewTip] = useState('')

    /* The on/off switch for our custom <input> field. */
    function statusHandler(status) {
        newCustomStatus(status)
    }

    /* Takes care of passing the data to the parent Border component. */
    function tipHandler(event) {
        if (typeof event === 'number') {
            props.tipDrag({ selectTip: event })
        } else {
            setNewTip(event.target.value)
            props.tipDrag({ selectTip: Number(event.target.value) })
        }
    }

    /* Allows you to call the function from within the ResetBtn sibling component. Which clears the custom <input> field. And switches it in <button>. */
    useImperativeHandle(
        ref,
        () => ({
            resetTip() {
                setNewTip('')
                newCustomStatus(false)
            }
        }),
    )

    return (
        <div className='selectTip'>
            <h5 className='selectTip__header'>Select Tip %</h5>
            <div className='selectTip__percent'>
                {TIP_PERCENT.map(button => (
                    <button className='selectTip__style' key={button.tip} onClick={() => { statusHandler(false); tipHandler(button.tip) }}>{button.tip + '%'}</button>
                ))}
                {customStatus === false ?
                    <button className='selectTip__style__custom' onClick={statusHandler}>Custom</button> :
                    <input value={currentTip} className='custom__tip' placeholder={'%'} type='number' onChange={tipHandler} onClick={() => { statusHandler(true); }} />
                }
            </div>
        </div>
    );
})

export default SelectTip;