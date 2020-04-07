import React from 'react';
import Header from './Header';
import { getUserRequest } from './requests';




class MyProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      success: '',
      user: {
        id: '',
        name: '',
        mail: '',
        password: '',
        gender: '',
        dateOfBirth: ''
      }
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    getUserRequest()
    .then(data => {
      console.log(data);
      if(data.success === true) {
        this.setState({
          mail: data.user.mail
        });
      }
    })
  }

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    
    return(
      <div>
         <Header current={this.props.match.path} history={this.props.history}/>
         <div>Email: {this.state.mail}</div>
      </div>
    ) 
   
  }
}
  
export default MyProfile;
  