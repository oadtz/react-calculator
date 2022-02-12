import React from 'react';
import CalculatorButton from '.';

interface IOperatorButtonProps {
    operator: string
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
}

const OperatorButton: React.FunctionComponent<IOperatorButtonProps> = ({
    operator,
    className,
    ...props
}) => {
    return (
        <CalculatorButton className={[
            "bg-gray-500 hover:bg-gray-700 hover:bg-opacity-20 text-white",
            className
        ].join(' ')} {...props}>{operator}</CalculatorButton>
    );
}

export default OperatorButton;