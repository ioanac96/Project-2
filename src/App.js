import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: 'Login'
    }
    // this.currentActionLogin = this.currentActionLogin.bind(this);
    // this.currentActionRegister = this.currentActionRegister.bind(this);
  }

  // currentActionLogin() {
  //   this.setState({
  //     currentAction: 'Login'
  //   });

  // }

  // currentActionRegister() {
  //   this.setState({
  //     currentAction: 'Register'
  //   });

  // }

  currentAction(id) {
    return () => {
      console.log(id);
      this.setState({
        currentAction: id
      });

    }

  }

  render() {
    console.log(this.state);
    const action = this.state.currentAction;
    return (

      <div className="page">
        <div className="navigation-region">
            <div className={action === 'Login'? "navigation active":"navigation"} id='Login' onClick={this.currentAction('Login')}>Login</div>
            <div className={action === 'Register'? "navigation active":"navigation" } id='Register' onClick={this.currentAction('Register')}>Register</div>
       </div>
       <div>
          {
          action === 'Login' ? <Login /> : <Register />
          }
      </div>

      </div>
      
    
      );
  } 
}

export default App;
