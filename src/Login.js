import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange(inputName) {
        return (event) => {
            const newObject = {};
            newObject[inputName] = event.target.value;
            console.log(newObject);
            this.setState(newObject);
        }

    }

    render() {
        const {username, password} = this.state;
        return (
            <div>
                <div>
                    <input type="text" value={username} onChange={this.onChange('username')} placeholder="Username" />
                </div>
                <div>
                    <input type="password" value={password} onChange={this.onChange('password')} placeholder="Password" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </div>

        );
    }
}

export default Login;