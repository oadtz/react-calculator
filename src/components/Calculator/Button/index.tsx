import React from 'react';

interface ICalculatorButtonProps {
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
    onClick?: () => void
}

const CalculatorButton: React.FunctionComponent<ICalculatorButtonProps> = ({className, extraHeight, extraWidth, onClick, ...props}) => {

    const handleOnClick = () => {
        if (onClick)
            onClick()
    }

    return (
        <div className={`${extraHeight && 'row-span-2'} ${extraWidth && 'col-span-2'} border border-gray-400 dark:border-indigo-400`}>
            <button className={[
                "w-full h-16 outline-none focus:outline-none text-xl font-light",
                className
            ].join(' ')}
            onClick={handleOnClick}
            >{props.children}</button>
        </div>
    );
}

export default CalculatorButton;