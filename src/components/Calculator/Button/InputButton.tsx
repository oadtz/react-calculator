import React, { useEffect } from 'react';
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
    const { setInput } = useCalculatorContext();

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === String(input).toLowerCase())
                setInput(input)
        }

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    });

    return (
        <CalculatorButton className={[
            "bg-gray-200 hover:bg-gray-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-opacity-10 text-black dark:text-white",
            className
        ].join(' ')}
        onClick={() => setInput(input)}
        {...props}>{input}</CalculatorButton>
    );
}

export default InputButton;