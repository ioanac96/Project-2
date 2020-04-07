import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthenticationForm from './AuthenticationForm';
import Home from './Home';
import SinglePost from './SinglePost';
import MyProfile from './MyProfile';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page">
          <Switch>
            <Route path="/login" component={AuthenticationForm} />
            <Route path="/register" component={AuthenticationForm} />
            <Route exact path="/posts" component={Home} />
            <Route path="/posts/:postId" component={SinglePost} />
            <Route path="/my-profile" component={MyProfile} />
          </Switch>
        </div>
      </Router>
      
    
      );
  } 
}

export default App;
