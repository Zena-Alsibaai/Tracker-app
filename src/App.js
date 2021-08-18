<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';



import Header from './components/Layout/Header'
=======
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> e229299ecf630721b077977cf6c74180af7b2a30
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
<<<<<<< HEAD
import  Profile  from './pages/Profile';
import  Register  from './pages/Register';
=======
import Header from './components/Header';
// import Login from './components/Login'


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
   //  return <Login setToken={setToken} />
  }
>>>>>>> e229299ecf630721b077977cf6c74180af7b2a30



  return (
<<<<<<< HEAD
 
      <BrowserRouter>
      <Header />
        <div className="app">
      
=======
    <div className="app">
      <BrowserRouter>
      <Header />
          <Container>
>>>>>>> e229299ecf630721b077977cf6c74180af7b2a30
             <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/series" exact component={Series} />
<<<<<<< HEAD
              <Route path="/profile" exact component={Profile} />
              <Route path="/register" exact component={Register} />
              <Route path="/search" exact component={Search} />
            </Switch> 
        </div>
      </BrowserRouter>
     
 
=======
              <Route path="/search" exact component={Search} />
              {/* <Route path="/login" exact component={Login} /> */}
            </Switch> 
          </Container>
      </BrowserRouter>
    </div>
    
>>>>>>> e229299ecf630721b077977cf6c74180af7b2a30
  );
};

export default App;
