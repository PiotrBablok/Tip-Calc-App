import React, { useState, forwardRef, useImperativeHandle } from 'react';

import './NumberOfPeople.css'

const NumberOfPeople = forwardRef((props, ref) => {

    const [currentPpl, newPpl] = useState('')

    const pplNum = (event) => {
        newPpl(event.target.value)
        props.dragPpl({ numberOfPeople: Number(event.target.value) })
    }

    useImperativeHandle(
        ref,
        () => ({
            resetPpl() {
                newPpl('')
            }
        }),
    )

    return (
        <div className='people'>
            <form className='people__form'>
                <h5 className='people__label'>Number of People</h5>
                {props.priceAmmount.price > 0 && currentPpl < 1 ?
                    <h5 className='people__label__zero'>Can't be zero</h5> :
                    <h5 className='people__label__hiden'>Can't be zero</h5>
                }

                {props.priceAmmount.price < 1 || currentPpl > 0 ?
                    <input value={currentPpl} className='people__ammount' placeholder={'0'} onChange={pplNum} type='number' /> :
                    <input value={currentPpl} className='people__ammount__warn' placeholder={'0'} onChange={pplNum} type='number' />
                }
            </form>
        </div>
    )
})

export default NumberOfPeople;
