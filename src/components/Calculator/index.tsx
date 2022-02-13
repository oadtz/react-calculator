import React from 'react';
import CalculatorContext from '../../context/CalculatorContext';
import InputButton from './Button/InputButton';
import OperatorButton from './Button/OperatorButton';
import CalculatorResultPanel from './ResultPanel';

const Calculator: React.FunctionComponent = () => {
    return (
        <CalculatorContext>
            <div className="w-full mx-auto max-w-sm rounded-xl shadow-xl text-gray-800 border border-gray-400 dark:border-indigo-400 relative overflow-hidden">
                <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex flex-col items-end text-right">
                    <CalculatorResultPanel />
                </div>
                <div className="w-full bg-gray-500 dark:bg-indigo-500">
                    <div className="grid grid-cols-4 w-full">
                        {/* Row 1 */}
                        <OperatorButton operator='C' keyMap='escape' className="bg-orange-400 dark:bg-orange-500" />
                        <OperatorButton operator='+/-' keyMap='!' />
                        <OperatorButton operator='÷' keyMap='/' />
                        <OperatorButton operator='x' keyMap='*' />
                        {/* Row 2 */}
                        <InputButton input={7} />
                        <InputButton input={8} />
                        <InputButton input={9} />
                        <OperatorButton operator='-' />
                        {/* Row 3 */}
                        <InputButton input={4} />
                        <InputButton input={5} />
                        <InputButton input={6} />
                        <OperatorButton operator='+' />
                        {/* Row 4 */}
                        <InputButton input={1} />
                        <InputButton input={2} />
                        <InputButton input={3} />
                        <OperatorButton operator='=' keyMap='enter' className='bg-green-700 dark:bg-green-800 h-32' extraHeight={true} />
                        {/* Row 5 */}
                        <InputButton input={0} extraWidth={true} />
                        <InputButton input={'.'} />

                    </div>
                </div>
            </div>
        </CalculatorContext>
    );
}

export default Calculator;