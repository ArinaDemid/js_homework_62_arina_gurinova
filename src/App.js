import React, {Component} from 'react';
import CountriesBlock from './container/CountriesBlock/CountriesBlock';
import Contacts from './container/Contacts/Contacts';
import Portfolio from './container/Portfolio/Portfolio';
import AboutUs from './container/About/About';
import './App.css';
import { Route, Switch, BrowserRouter, NavLink } from 'react-router-dom';
import Logo from './container/About/AboutPhoto/logo.png'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <img className="App-logo" src={Logo} alt="Logo"/>
        <nav>
          <NavLink exact to="/" className="link">About Me</NavLink>
          <NavLink to="/contacts" className="link">Leave your contacts for the offer</NavLink>
          <NavLink to="/countriesBlock" className="link">Info about Countries</NavLink>
          <NavLink to="/portfolio" className="link">Portfolio</NavLink>
        </nav>
          <Switch>
            <Route path="/countriesBlock" component={CountriesBlock}/>
            <Route path="/" exact component={AboutUs}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </BrowserRouter>
      </div>
      )
    }
  }
  
export default App;
