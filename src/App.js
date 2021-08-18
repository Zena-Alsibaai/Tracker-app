import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';



import Header from './components/Layout/Header'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import  Profile  from './pages/Profile';
import  Register  from './pages/Register';



const App = () => {
  return (
 
      <BrowserRouter>
      <Header />
        <div className="app">
      
             <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies" exact component={Movies} />
              <Route path="/series" exact component={Series} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/register" exact component={Register} />
              <Route path="/search" exact component={Search} />
            </Switch> 
        </div>
      </BrowserRouter>
     
 
  );
};

export default App;
