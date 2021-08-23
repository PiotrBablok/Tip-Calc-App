import React, { useState, forwardRef, useImperativeHandle } from 'react';

import './Bill.css'

const Bill = forwardRef((props, ref) => {

    const [currentBill, setNewBill] = useState('');

    function billHandler(event) {
        setNewBill(event.target.value);
        props.dragAmmount({ price: Number(event.target.value) })
    }

    useImperativeHandle(
        ref,
        () => ({
            resetBill() {
                setNewBill('')
            }
        }),
    )

    return (
        <div className='bill'>
            <form className='bill__form'>
                <h5 className='bill__header'>Bill</h5>
                <input value={currentBill} onChange={billHandler} className='bill__price' placeholder={'0'} type='number' />
            </form>
        </div>
    )
})

export default Bill;