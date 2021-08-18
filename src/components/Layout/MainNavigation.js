import React, { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'

import classes from './MainNavigation.module.css';
import LoginForm from '../LoginForm';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>Watch App</div>
      </NavLink>
      <nav className="navigation">
      <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='movies'>Movies</NavLink>
            </li>
            <li>
                <NavLink to='series'>Series</NavLink>
            </li>
          
        </ul>
        <ul>
            <li>
                <NavLink to = '/profile'><button onClick={<LoginForm />}>Log in</button></NavLink>
            </li>
            <li>
            {/* <li>
                <NavLink to='/profile'>Profile</NavLink>
            </li> */}
                <NavLink to='/register'><button>Sign up</button></NavLink>
            </li>
          
        </ul>
        <ul>
            <li>
                <NavLink to='/search'><SearchIcon /></NavLink>
            </li>
        </ul>
    
      </nav>
    </header>
  );
};

export default MainNavigation;