import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


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
            <NavLink exact to= "search" activeClassName="nav-active">
                Search 
            </NavLink>
            <SearchIcon />
            <NavLink exact to= "user" activeClassName="nav-active">
                Series
            </NavLink>
            
        </div>
    );
};

export default Navigation;









// import React, {useEffect} from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import WhatshotIcon from '@material-ui/icons/Whatshot';
// import MovieIcon from '@material-ui/icons/Movie';
// import TvIcon from '@material-ui/icons/Tv';
// import SearchIcon from '@material-ui/icons/Search';
// import { useHistory } from 'react-router-dom';



// const useStyles = makeStyles({
//   root: {
//     width: 500,
//     position: "fixed",
//     bottom: 0,
//     backgroundColor: "#2d313a",
//     zIndex: 100,
//   },
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const history = useHistory()

//   //eslint-disable-next-line
// //   useEffect(() => {
// //       if (value === 0) history.push("/");
// //       else if (value === 1) history.push("/movies")
// //       else if (value === 2) history.push("/series")
// //       else if (value === 3) history.push("/search")

// //   }, [value, history])

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >

//     <BottomNavigationAction 
//         style={{color: "#fff" }} 
//         label="Popular" 
//         icon={<WhatshotIcon/>} 
//     />
        
//     <BottomNavigationAction 
                
//         style={{color: "#fff" }} 
//         label="Movies" 
//         icon={<MovieIcon />} 
                
//     />

//       <BottomNavigationAction 
//       style={{color: "#fff" }} 
//       label="Series" 
//       icon={<TvIcon />} 
//       />

//       <BottomNavigationAction 
//         style={{color: "#fff" }} 
//         label="Search" 
//         icon={<SearchIcon />} 
//       />
//     </BottomNavigation>
//   );
// }
