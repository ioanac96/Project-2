import React from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

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

    }
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
  

  render() {
    const { name, username, password } = this.state;
    return (
      <div>
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" value={username} onChange={this.onInputChange('username')} placeholder="Username" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id= "password" value={password} onChange={this.onInputChange('password')} placeholder="Password" />
        </div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" value={name} onChange={this.onInputChange('name')} placeholder="Name" />
        </div>
        <div>
          <Select className="select" classNamePrefix="select-prefix" value={this.state.gender} onChange={this.onChange('gender')} options={options}/>
        </div>
        <div>
          <DatePicker onChange={this.onChange('date')} selected={this.state.date} showYearDropdown />
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
      
      );
    }
  }
  
  export default Register;