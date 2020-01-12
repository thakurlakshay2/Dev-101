import React from 'react';
import NavBar from './components/navbar'
import './App.css';
import Movies from './components/movies'
import Customers from './components/Customers'
import Rentals from './components/Rentals'
import Login from './components/Login'
import AddMovie from './components/AddMovie'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/"  exact component={Movies}></Route>
        <Route path="/Movies" exact component={Movies}></Route>
        <Route path="/Customers" component={Customers}></Route> 
        <Route path="/Rentals" component={Rentals}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Movies/add" component={AddMovie}></Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;
