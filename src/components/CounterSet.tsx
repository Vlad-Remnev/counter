import React, {FC} from 'react';
import {InputCount} from "./common/InputCount";
import {Button} from "./common/Button";

interface ICounterSet {
    maxCount: number
    startCount: number
    error: string
    onChangeMaxInput: (value: number) => void
    onChangeStartInput: (value: number) => void
    addValues: () => void
    className: string
}

export const CounterSet:FC<ICounterSet> = ({error, addValues, onChangeStartInput, onChangeMaxInput, startCount, maxCount, className}) => {

    let inputStartClass = startCount < 0 || startCount > maxCount ||  startCount === maxCount ? className : ''
    let inputMaxClass =  maxCount < 0 || maxCount < startCount ||  startCount === maxCount ? className : ''

    return (
        <div className="counter-app">
            <div className="counter-out">
                <div>max value: <InputCount className={inputMaxClass}  value={maxCount} setValue={onChangeMaxInput}/>
                </div>
                <div>start value: <InputCount className={inputStartClass} value={startCount} setValue={onChangeStartInput}/></div>
            </div>
            <div className="btns">
                <Button disabled={error !== 'Enter values, press set'} title={'set'} className='set' onClick={addValues}/>
            </div>
        </div>
    );
};