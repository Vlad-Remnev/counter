import React, {useEffect, useReducer, useState} from 'react';
import {CounterSet} from "./CounterSet";
import {CounterShow} from "./CounterShow";
import {addValueAC, countReducer} from "../reducers/countReducer";
import {addMaxValueAC, maxCountReducer} from "../reducers/maxCountReducer";
import {addStartValueAC, startCountReducer} from "../reducers/startCountReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducer} from "../store/store";

export const Counter = () => {
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const count = useSelector<AppRootReducer, number>(state => state.count)
    const startCount = useSelector<AppRootReducer, number>(state => state.startCount)
    const maxCount = useSelector<AppRootReducer, number>(state => state.maxCount)

    // useEffect(() => {
    //     let countString = localStorage.getItem('countValue')
    //     if (countString) {
    //         let newCount = JSON.parse(countString)
    //         dispatch(addValueAC(newCount))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('countValue', JSON.stringify(count))
    // }, [count])

    const addValues = () => {
        setError('')
        dispatch(addValueAC(startCount))
    }

    let classNameInputStart = 'inputError'


    const onChangeMaxInput = (value: number) => {
        dispatch(addMaxValueAC(value))
        if (value <= startCount || value < 0) {
            setError('Incorrect value')
        } else {
            setError('Enter values, press set')
        }
    }

    const onChangeStartInput = (value: number) => {
        dispatch(addStartValueAC(value))
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
                               addValues={addValues}
                />
        </>
    );
};