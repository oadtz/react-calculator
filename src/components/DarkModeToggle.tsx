import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle: React.FunctionComponent = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleDarkMode = ():void => {
        setDarkMode(!darkMode);
    }


    return (
        <>
            <Helmet htmlAttributes={{ class: darkMode && 'dark' }}></Helmet>
            <button onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} inverse={darkMode} />
            </button>
        </>
    );
}

export default DarkModeToggle;