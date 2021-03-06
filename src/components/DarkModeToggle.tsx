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
            <button onClick={toggleDarkMode} className="outline-none">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} inverse={darkMode} />
            </button>
        </>
    );
}

export default DarkModeToggle;