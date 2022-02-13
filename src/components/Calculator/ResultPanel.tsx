import React from 'react';
import { useCalculatorContext } from '../../context/CalculatorContext';

const CalculatorResultPanel: React.FunctionComponent = () => {
    const { input, operand1, operator, operand2, result } = useCalculatorContext();

    const getCalculation = () => {
        let calculation: string = `${operand1 ?? ''} ${operator ?? ''} ${operand2 ?? ''} ${result != null ? '=' : ''}`;
        
        return calculation;
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/3 py-2 px-6 mb-auto text-xl text-white font-thin">{getCalculation()}</div>
            <div className="w-full h-2/3 py-2 px-6 mt-auto text-6xl text-white font-thin">{input || result}</div>
        </div>
    );
}

export default CalculatorResultPanel;