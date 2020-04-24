import React, { Component } from 'react';
import NavBar from "./components/navbar/navbar"
import { Route, Switch, Redirect} from 'react-router-dom';
import About from "./components/about/about"
import Register from './components/register/register';
import Home from './components/home/home';
import NotFound from './components/notfound/notfound';
import Footer from './components/footer/footer';
import LoginForm from "./components/loginform/loginform"
import "./App.css"

class App extends Component {
    state = {
      navigations:["home", "about", "register", "login"]
    }


  render() { 
    const { navigations}=this.state
    
    return ( 
      <React.Fragment>
        <div className="navbar-container">
         <NavBar 
         navigations={navigations}
        />
        </div>
        
        <div className="routing">
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" component= {LoginForm}/>
          <Route path="/not-found" component={NotFound} />
          
          <Route path='/' exact component={Home} />
          <Redirect to="/not-found" />
          </Switch>
        </div>

        <div className="footer-container">
        <Footer />
        </div>

      </React.Fragment>
     );
  }
}
 
export default App;