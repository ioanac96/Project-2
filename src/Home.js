import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.onLogOut = this.onLogOut.bind(this);
    }

    componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('uniqueToken')
            }
        };

        fetch('http://192.168.0.155:2222/api/user', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success === false) {
                this.onLogOut();
            }
        });

    }

    onLogOut() {
        localStorage.removeItem('uniqueToken');
        this.props.history.push('/login');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div>This is the amazing Home page, enjoy!</div>
                <button onClick={this.onLogOut}>Log out</button>
            </div>
        )
    }

}

export default Home;