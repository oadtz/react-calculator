import React from 'react';
import CalculatorButton from '.';

interface IOperandButtonProps {
    operand: string
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
}

const OperandButton: React.FunctionComponent<IOperandButtonProps> = ({
    operand,
    className,
    ...props
}) => {
    return (
        <CalculatorButton className={[
            "bg-gray-200 hover:bg-gray-300 hover:bg-opacity-10 text-black",
            className
        ].join(' ')} {...props}>{operand}</CalculatorButton>
    );
}

export default OperandButton;