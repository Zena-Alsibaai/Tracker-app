import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to= "/" activeClassName="nav-active">
                Home
            </NavLink>
            <NavLink exact to= "movies" activeClassName="nav-active">
                Movies
            </NavLink>
            <NavLink exact to= "series" activeClassName="nav-active">
                Series
            </NavLink>
            
        </div>
    );
};

export default Navigation;