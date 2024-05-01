import React from 'react';
import logo from '../assets/logo-icon.webp';

function NavBar({ onSectionChange }) {
    
    return (
        <nav className="nav-bar-section">
            <ul>
                <li><a className="element-li-list" onClick={() => onSectionChange('contact')}>CONTACT</a></li>
                <li><a className="element-li-list" onClick={() => onSectionChange('project')}>PROJECT</a></li>
                <li><a className="element-li-list" onClick={() => onSectionChange('home')}>HOME</a></li>
                <li><a className="element-li-list"><img src={logo} alt="" className="logo-icon" /></a></li>
            </ul>
            <div className="divisor-nav-bar"></div>
        </nav>
    );
}

export default NavBar;
