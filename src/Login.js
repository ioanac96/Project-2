import React from 'react';
import { loginRequest } from './requests';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(inputName) {
        return (event) => {
            const newObject = {};
            newObject[inputName] = event.target.value;
            console.log(newObject);
            this.setState(newObject);
        }
    }
    
    onSubmit(){
        if (this.state.username === '' || this.state.password === '') return;
        loginRequest(this.state.username, this.state.password).then(data => {
            if(data.success === true) {
                localStorage.setItem('uniqueToken', data.token);
                this.props.history.push('/posts');
            }
            else {
                this.setState({
                    error: data.message
                });
            }
        });

    }


    render() {
        console.log(JSON.stringify({ mail: this.state.username, password: this.state.password  }));
        const {username, password, error} = this.state;
        return (
            <div>
                <div>
                    <label for="username">Username:</label>
                    <input  type="text" id="username" value={username} onChange={this.onChange('username')} placeholder="Username" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={this.onChange('password')} placeholder="Password" />
                </div>
                <div className="submit">
                    <button onClick={this.onSubmit}>Submit</button>
                </div>
                {
                    error !== '' ? <div className='error'>{error.toUpperCase()}</div> : null 
                }
            </div>

        );
    }
}

export default Login;