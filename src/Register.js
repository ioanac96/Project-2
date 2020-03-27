import React from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'cat', label: 'Cat' }
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
          <input type="text" value={username} onChange={this.onInputChange('username')} placeholder="Username" />
        </div>
        <div>
          <input type="password" value={password} onChange={this.onInputChange('password')} placeholder="Password" />
        </div>
        <div>
          <input type="text" value={name} onChange={this.onInputChange('name')} placeholder="Name" />
        </div>
        <div>
          <Select value={this.state.gender} onChange={this.onChange('gender')} options={options}/>
        </div>
        <div>
          <DatePicker onChange={this.onChange('date')} selected={this.state.date} showYearDropdown />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
      
      );
    }
  }
  
  export default Register;