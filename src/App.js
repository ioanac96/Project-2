import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import AuthenticationForm from './AuthenticationForm';
import Home from './Home';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Switch>
            <Route path="/login" component={AuthenticationForm} />
            <Route path="/register" component={AuthenticationForm} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
      
    
      );
  } 
}

export default App;
