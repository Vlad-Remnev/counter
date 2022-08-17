import React, {useEffect, useState} from 'react';
import {CounterSet} from "./CounterSet";
import {CounterShow} from "./CounterShow";

export const Counter = () => {

    const [maxCount, setMaxCount] = useState(0)
    const [startCount, setStartCount] = useState(0)
    const [count, setCount] = useState(0)
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    useEffect(() => {
        let countString = localStorage.getItem('countValue')
        if (countString) {
            let newCount = JSON.parse(countString)
            setCount(newCount)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    const addValues = () => {
        setError('')
        setCount(startCount)
        setShow(!show)
    }

    let classNameInputStart = 'inputError'


    const onChangeMaxInput = (value: number) => {
        setMaxCount(value)
        if (value <= startCount || value < 0) {
            setError('Incorrect value')
        } else {
            setError('Enter values, press set')
        }
    }

    const onChangeStartInput = (value: number) => {
        setStartCount(value)
        if (value >= maxCount || value < 0) {
            setError('Incorrect value')
        } else {
            setError('Enter values, press set')
        }
    }

    return (
        <>

                <CounterSet error={error}
                              maxCount={maxCount}
                              startCount={startCount}
                              addValues={addValues}
                              onChangeMaxInput={onChangeMaxInput}
                              onChangeStartInput={onChangeStartInput}
                              className={classNameInputStart}
                />
                <CounterShow count={count}
                               error={error}
                               maxCount={maxCount}
                               startCount={startCount}
                               setCount={setCount}
                               addValues={addValues}
                />


        </>
    );
};