import React from 'react';
import ImageList from './ImageList'
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart'
import AuthModal from './components/AuthModal/AuthModal'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/gallery'>
            <ImageList/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <AuthModal/>
        </div>
      </Router>
    );
  }  
}

export default App;