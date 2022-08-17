import React, {ChangeEvent, FC} from 'react';

interface IInputCount {
    value: number
    setValue: (num: number) => void
    className?: string
}

export const InputCount: FC<IInputCount> = ({value, setValue, className}) => {

    const valueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(+event.currentTarget.value)
    }

    return (
        <input type="number"
               value={value}
               onChange={valueChange}
               className={className}/>
    );
};