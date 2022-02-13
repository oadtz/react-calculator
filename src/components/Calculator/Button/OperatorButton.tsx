import React, { useEffect } from 'react';
import CalculatorButton from '.';
import { useCalculatorContext } from '../../../context/CalculatorContext';
import { Operator } from '../../../models/types';

interface IOperatorButtonProps {
    operator: Operator
    keyMap?: string
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
}

const OperatorButton: React.FunctionComponent<IOperatorButtonProps> = ({
    operator,
    keyMap,
    className,
    ...props
}) => {
    const { setOperator } = useCalculatorContext();
    
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === String(keyMap ?? operator).toLowerCase())
                setOperator(operator)
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    });
    
    return (
        <CalculatorButton className={[
            "bg-gray-500 hover:bg-gray-700 hover:bg-opacity-20 text-white",
            className
        ].join(' ')}
        onClick={() => setOperator(operator)}
        {...props}>{operator}</CalculatorButton>
    );
}

export default OperatorButton;