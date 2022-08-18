import React, {Dispatch, FC} from 'react';
import {Count} from "./Count";
import {Button} from "./common/Button";
import {addValueAC, CountReducerTypes, plusValueAC} from "../reducers/countReducer";
import {useDispatch} from "react-redux";

interface ICounterShow {
    count: number
    error: string
    maxCount: number
    startCount: number
    addValues: () => void
}

export const CounterShow:FC<ICounterShow> = ({count,error,startCount,maxCount, addValues}) => {
    const dispatch = useDispatch()
    return (
        <div className='counter-app'>
            <Count value={count}
                   className={error === 'Incorrect value' || count === maxCount || count === startCount ?  'counter-out-more' : "counter-out"}
                   error={error}/>
            <div className="btns-container">
                <Button disabled={count >= maxCount} title={'+'} className="counter"
                        onClick={() => dispatch(plusValueAC(1))}/>
                <Button disabled={count === startCount} className={"reset"} title={'Reset'}
                        onClick={() => dispatch(addValueAC(startCount))}/>
                {/*<Button disabled={count === startCount} className={"reset"} title={'Set'}*/}
                {/*        onClick={addValues}/>*/}
            </div>
        </div>
    );
};