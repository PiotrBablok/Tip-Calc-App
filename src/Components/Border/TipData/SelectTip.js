import React, {useState, forwardRef, useImperativeHandle} from 'react';

import './SelectTip.css'

const TIP_PERCENT = [
    {tip: 5},
    {tip: 10},
    {tip: 15},
    {tip: 25},
    {tip: 50},
]


const SelectTip = forwardRef((props,ref) => {

    const [customStatus,newCustomStatus] = useState(false);
    const [currentTip,setNewTip] = useState('')

    function statusHandler(status) {
        newCustomStatus(status)
    }

    function tipHandler(event) {
        if(typeof event === 'number'){
            props.tipDrag({selectTip: event})
        }else{
            setNewTip(event.target.value)
            props.tipDrag({selectTip: Number(event.target.value)}) 
        }
    }

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
                    <button className='selectTip__style' key={button.tip}  onClick={() => {statusHandler(false); tipHandler(button.tip)}}>{button.tip+'%'}</button>
                ))}
                {customStatus === false ?
                <button className='selectTip__style__custom' onClick={statusHandler}>Custom</button>:
                <input value={currentTip} className='custom__tip' placeholder={'%'} type='number' onChange={tipHandler} onClick={() => {statusHandler(true);}} />
                }
            </div>
        </div>
    );
})

export default SelectTip;