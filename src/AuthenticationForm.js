import React from 'react';
import Login from './Login.js';
import Register from './Register.js';
import './AuthenticationForm.css';
import {
  Link
} from "react-router-dom";

class AuthenticationForm extends React.Component {
    render() {
        const action = this.props.match.path === '/login' ? 'Login' : 'Register';
        return (
            <div className="login-page">
                <div className="middle-region">
                    <div className="navigation-region">
                    <Link to="/login" className={action === 'Login'? "navigation active":"navigation"} id='Login'>Login</Link>
                    <Link to="/register" className={action === 'Register'? "navigation active":"navigation" } id='Register'>Register</Link>
                    </div>
                    <div className="below-part">
                        {
                            action === 'Login' ? <Login history={this.props.history} /> : <Register history={this.props.history} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthenticationForm;