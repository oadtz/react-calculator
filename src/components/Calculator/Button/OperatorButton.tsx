import React from 'react';
import CalculatorButton from '.';
import { useCalculatorContext } from '../../../context/CalculatorContext';
import { Operator } from '../../../models/types';

interface IOperatorButtonProps {
    operator: Operator
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
}

const OperatorButton: React.FunctionComponent<IOperatorButtonProps> = ({
    operator,
    className,
    ...props
}) => {
    const context = useCalculatorContext();
    
    return (
        <CalculatorButton className={[
            "bg-gray-500 hover:bg-gray-700 hover:bg-opacity-20 text-white",
            className
        ].join(' ')}
        onClick={() => context.setOperator(operator)}
        {...props}>{operator}</CalculatorButton>
    );
}

export default OperatorButton;