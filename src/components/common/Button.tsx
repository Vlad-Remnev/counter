import React, {ButtonHTMLAttributes, FC} from 'react';

type Props = {
    title: string
    className: string
    onClick: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

//Record, Partial, Omit


export const Button: FC<Partial<Props>> = ({title, onClick, className, ...restProps}) => {
    return (
        <button
            onClick={onClick}
            className={className}
            {...restProps}>
            {title}
        </button>
    )
};