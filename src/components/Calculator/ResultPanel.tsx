import React from 'react';
import { useCalculatorContext } from '../../context/CalculatorContext';

const CalculatorResultPanel: React.FunctionComponent = () => {
    const { input, operand1, operator, operand2, result } = useCalculatorContext();

    const getCalculation = () => {
        if (operand1 == null)
            return '0';

        let calculation: string = `${operand1 ?? ''} ${operator ?? ''} ${operand2 ?? ''} ${result != null ? '=' : ''}`;
        
        return calculation;
    }

    return (
        <>
            <div className="w-full py-2 px-6 text-xl text-white font-thin">{getCalculation()}</div>
            <div className="w-full py-2 px-6 text-6xl text-white font-thin">{input || result}</div>
        </>
    );
}

export default CalculatorResultPanel;