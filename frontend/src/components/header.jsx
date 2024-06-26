// This simple header component is reused on each page and displays the title of the site
// it also has a link to the github repository for the project

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import "../index.css"; 

const Header = () => {
    return (
        <header className="header">
            <div className="header_title">The Matrix</div>
            <a href="https://github.com/alexawenger/326-petition" target="_blank" rel="noopener noreferrer" className="header_github">
                <FaGithub />
            </a>
        </header>
    );
};

export default Header;