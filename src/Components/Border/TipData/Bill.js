import React, { useState, forwardRef, useImperativeHandle } from 'react';

import './Bill.css'

const Bill = forwardRef((props, ref) => {

    /* Collects data entered by the user. */
    const [currentBill, setNewBill] = useState('');

    /* Takes care of passing the data to the parent Border component. */
    function billHandler(event) {
        setNewBill(event.target.value);
        props.dragAmmount({ price: Number(event.target.value) })
    }

    /* Allows you to call the function from within the ResetBtn sibling component. Which clears the <input> field. */
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