import React from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { registrationRequest } from './requests';
import Input from './Input.js';

const options = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' }
]

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      gender: null,
      name: '',
      username: '',
      password: ''
    };

    this.sendRegistration = this.sendRegistration.bind(this);
  }

  onChange(name) {
    return (newValue) => {
      const newState = {};
      newState[name] = newValue;
      this.setState(newState);
    }
    
  }


  onInputChange(inputName) {
    return (e) => {
      const newState = {}
      newState[inputName] = e.target.value;
      this.setState(newState);
    }
  }

  sendRegistration() {
    registrationRequest(this.state.username, this.state.password)
    .then(data => {
      if (data.success === true) {
        this.props.history.push('/login');
      }
    })
    
  }

  

  render() {
    const { name, username, password } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input value={username} type="text" id="email"  placeholder="Email" onChange={this.onInputChange('username')} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id= "password" value={password} onChange={this.onInputChange('password')} placeholder="Password" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} className="name" onChange={this.onInputChange('name')} placeholder="Name" />
        </div>
        <div>
          <Select className="select" classNamePrefix="select-prefix" value={this.state.gender} onChange={this.onChange('gender')} options={options}/>
        </div>
        <div>
          <DatePicker onChange={this.onChange('date')} selected={this.state.date} showYearDropdown />
        </div>
        <div className="submit">
          <button onClick={this.sendRegistration}>Submit</button>
        </div>
      </div>
      
      );
    }
  }
  
  export default Register;