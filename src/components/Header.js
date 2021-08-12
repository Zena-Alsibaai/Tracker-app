import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className="header">
            {/* <span>Zen Tracker</span> */}
            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;