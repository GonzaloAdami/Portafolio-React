import React from 'react';
import logo from '../assets/logo-icon.webp';
import './navBar.css';
function NavBar({ onSectionChange }) {
    
    return (
        <>
         <div className='nav-bar'>
            <nav className="nav-bar-section">
            
                <ul>
                    <li><a className="element-li-list" onClick={() => onSectionChange('contact')}>CONTACT</a></li>
                    <li><a className="element-li-list" onClick={() => onSectionChange('project')}>PROJECT</a></li>
                    <li><a className="element-li-list" onClick={() => onSectionChange('home')}>HOME</a></li>
                    <li><a className="element-li-list"><img src={logo} alt="" className="logo-icon" /></a></li>
                </ul>
                
            </nav>
            <div className="divisor-nav-bar"></div>
        </div>
         </>
    );
}

export default NavBar;
