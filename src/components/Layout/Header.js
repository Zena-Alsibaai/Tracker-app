import React from 'react';
import MainNavigation from './MainNavigation';

const Header = () => {
    return (
        <div className="header">
            {/* <span>Zen Tracker</span> */}
            <div>
            <MainNavigation />
            </div>
        </div>
    );
};

export default Header;