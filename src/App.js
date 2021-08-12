import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
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



  return (
    <div className="app">
      <BrowserRouter>
      <Header />
          <Container>
             <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/series" exact component={Series} />
              <Route path="/search" exact component={Search} />
              {/* <Route path="/login" exact component={Login} /> */}
            </Switch> 
          </Container>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
