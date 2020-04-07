import React from 'react';
import {
    Link
  } from "react-router-dom";



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.onLogOut = this.onLogOut.bind(this);
    }
    
    onLogOut() {
        localStorage.removeItem('uniqueToken');
        this.props.history.push('/login');
    }

    render() {
    const currentPath = this.props.current === '/posts' ? "Posts" : "MyProfile";
    return (
    <div>
        <div className="posts-header">
            <Link to="/posts" className={ currentPath === "Posts" ? "active link-to-home" : " link-to-home"}>Home</Link>
            <div className="link-to-log-out" onClick={this.onLogOut}>Log out</div>
            <Link to="/my-profile" className={ currentPath === "MyProfile" ? "active link-to-my-profile" : " link-to-my-profile"}>My profile</Link>
        </div>
    </div>
    );
    } 
  }
  
  export default Header;
  