import React from 'react';
import OperandButton from './Button/OperandButton';
import OperatorButton from './Button/OperatorButton';

const Calculator: React.FunctionComponent = () => {
    return (
        <div className="w-full mx-auto rounded-xl shadow-xl text-gray-800 border border-gray-400 relative overflow-hidden">
            <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex flex-col items-end text-right">
                <div className="w-full py-2 px-6 text-xl text-white font-thin">Ans = 2</div>
                <div className="w-full py-2 px-6 text-6xl text-white font-thin">340.0</div>
            </div>
            <div className="w-full bg-gray-500 dark:bg-indigo-500">
                <div className="grid grid-cols-4 w-full">
                    {/* Row 1 */}
                    <OperatorButton operator='C' className="bg-orange-400" />
                    <OperatorButton operator='+/-' />
                    <OperatorButton operator='÷' />
                    <OperatorButton operator='x' />
                    {/* Row 2 */}
                    <OperandButton operand='7' />
                    <OperandButton operand='8' />
                    <OperandButton operand='9' />
                    <OperatorButton operator='-' />
                    {/* Row 3 */}
                    <OperandButton operand='4' />
                    <OperandButton operand='5' />
                    <OperandButton operand='6' />
                    <OperatorButton operator='+' />
                    {/* Row 4 */}
                    <OperandButton operand='1' />
                    <OperandButton operand='2' />
                    <OperandButton operand='3' />
                    <OperatorButton operator='=' className='bg-green-700 h-full' extraHeight={true} />
                    {/* Row 5 */}
                    <OperandButton operand='0' extraWidth={true} />
                    <OperandButton operand='.' />

                </div>
            </div>
        </div>
    );
}

export default Calculator;