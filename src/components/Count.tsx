import React, {FC} from 'react';

interface ICount {
    value: number | string
    className: string
    error: string
}

export const Count:FC<ICount> = ({value, className, error}) => {
    return (
        <div className={className}>
            {error ? error : value}
        </div>
    );
};
