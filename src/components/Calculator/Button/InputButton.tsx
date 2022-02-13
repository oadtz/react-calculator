import React from 'react';
import CalculatorButton from '.';
import { useCalculatorContext } from '../../../context/CalculatorContext';
import { Input } from '../../../models/types';

interface IInputButtonProps {
    input: Input
    className?: string
    extraHeight?: boolean
    extraWidth?: boolean
}

const InputButton: React.FunctionComponent<IInputButtonProps> = ({
    input,
    className,
    ...props
}) => {
    const context = useCalculatorContext();

    return (
        <CalculatorButton className={[
            "bg-gray-200 hover:bg-gray-300 hover:bg-opacity-10 text-black",
            className
        ].join(' ')}
        onClick={() => context.setInput(input)}
        {...props}>{input}</CalculatorButton>
    );
}

export default InputButton;