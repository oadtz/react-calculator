import React from 'react';
import './assets/styles.css';
import Calculator from './components/Calculator';

const App: React.FunctionComponent = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <Calculator />
        </div>
    </div>
  );
}

export default App;
