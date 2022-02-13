import React, { useContext, useEffect, useState } from 'react';
import { Input, Operator } from '../models/types';

interface ICalculatorContextProps {
    input: string
    operator?: Operator
    operand1?: number
    operand2?: number
    result?: number
    setInput: (input: Input) => void
    setOperator: (operator: Operator) => void
}

const Context = React.createContext({} as ICalculatorContextProps);

const CalculatorContext: React.FunctionComponent = (props) => {
    const [currentInput, setCurrentInput] = useState<string>('');
    const [currentOperator, setCurrentOperator] = useState<Operator>();
    const [currentResult, setCurrentResult] = useState<number>();
    const [currentOperand1, setCurrentOperand1] = useState<number>();
    const [currentOperand2, setCurrentOperand2] = useState<number>();

    const setInput = (input: Input): void => {
        if (currentResult != null) { 
            setCurrentOperand1(currentResult);
            setCurrentOperand2(undefined);
            setCurrentResult(undefined);
        }
        if (currentInput === '0')
            setCurrentInput(String(input));
        else if (input !== '.' || !currentInput.includes('.'))
            setCurrentInput(`${currentInput}${input}`);
    }

    const setOperator = (operator: Operator): void => {
        switch (operator) {
            case '+':
            case '-':
            case 'x':
            case '÷':
                calculate(operator);
                break;
            case '=':
                calculate();
                break;
            case '+/-':
                toggleSign();
                break;
            case 'C':
            default:
                clear();
        }
    }


    const calculate = (operator?: Operator) => {
        let newOperand1 = currentOperand1;
        let newOperand2 = currentOperand2;
        let newInput = currentInput;
        let newResult = currentResult;
        let newOperator = operator;
        
        if (currentInput !== '' && currentOperand1 == null) {
            newOperand1 = Number(currentInput);
            newInput = '';
        } else if (currentInput !== '' && currentOperand2 == null) {
            newOperand2 = Number(currentInput);
            newInput = '';
        } else if (currentResult != null && newOperator) {
            newOperand1 = currentResult;
            newOperand2 = undefined;
            newResult = undefined;
            newInput = '';
        }


        if (newOperand1 != null && newOperand2 != null) {
            switch (currentOperator) {
                case '+':
                    newResult = newOperand1 + newOperand2;
                    break;
                case '-':
                    newResult = newOperand1 - newOperand2;
                    break;
                case 'x':
                    newResult = newOperand1 * newOperand2;
                    break;
                case '÷':
                    newResult = newOperand1 / newOperand2;
                    break;
            }
            newInput = '';
        }

        setCurrentOperand1(newOperand1);
        setCurrentOperand2(newOperand2);
        setCurrentInput(newInput);
        setCurrentResult(newResult);

        if (newOperator && newOperand1 != null) {
            setCurrentOperator(newOperator);
        }
    }

    const toggleSign = () => {
        if (currentInput !== '') {
            setCurrentInput(String(-Number(currentInput)));
        }
        if (currentResult != null) {
            setCurrentResult(-currentResult);
        }
    }

    const clear = (): void => {
        setCurrentInput('');
        setCurrentOperand1(undefined);
        setCurrentOperand2(undefined);
        setCurrentOperator(undefined);
        setCurrentResult(undefined);
    }

    return (
        <Context.Provider value={{
            input: currentInput,
            operator: currentOperator,
            operand1: currentOperand1,
            operand2: currentOperand2,
            result: currentResult,
            setInput,
            setOperator
        }}>
            {props.children}
        </Context.Provider>
    );
}

export const useCalculatorContext = () => {
    return useContext(Context);
}

export default CalculatorContext;