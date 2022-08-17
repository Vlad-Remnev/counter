import React, {FC} from 'react';
import {Count} from "./Count";
import {Button} from "./common/Button";

interface ICounterShow {
    count: number
    error: string
    maxCount: number
    startCount: number
    addValues: () => void
    setCount: (value: number) => void
}

export const CounterShow:FC<ICounterShow> = ({count,error,setCount,startCount,maxCount, addValues}) => {
    return (
        <div className='counter-app'>
            <Count value={count}
                   className={error === 'Incorrect value' ?  'counter-out-more' : "counter-out"}
                   error={error}/>
            <div className="btns-container">
                <Button disabled={count >= maxCount} title={'+'} className="counter"
                        onClick={() => setCount(count + 1)}/>
                <Button disabled={count === startCount} className={"reset"} title={'Reset'}
                        onClick={() => setCount(startCount)}/>
                <Button disabled={count === startCount} className={"reset"} title={'Set'}
                        onClick={addValues}/>
            </div>
        </div>
    );
};