import React, { Component } from 'react';
import './style.css';

class RegForm extends Component {

  constructor() {
    super();
    this.state = {selectedOption: ''};
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  
  getInitialState(){
    return {
      showAlert: false
    }
  }

  register(e){
    e.preventDefault();
     var firstName = this.refs.firstName.value.trim();
     var lastName = this.refs.lastName.value.trim();
     var email = this.refs.email.value;
    var male = this.refs.male_gender.checked;
    var female = this.refs.female_gender.checked;
    var dateOfBirth = this.refs.dateOfBirth.value;
    var password = this.refs.password.value.trim();
   
    var gender = 'others'
    if (male == false && female == true) {
      gender = 'female';
    }
    else if (female == false && male == true) {
      gender = 'male';
    }
   
    if ( !firstName || !email) {
      this.setState({showAlert: true});
      return;
    }
    
    
     alert("Thank You " + firstName + " " + lastName + " " + email + " " + dateOfBirth + " " + gender + " " + password);
    
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';
    this.refs.email.value = '';
    this.refs.male_gender.checked = '';
    this.refs.female_gender.checked = '';
    this.refs.dateOfBirth.value = '';
    this.refs.password.value = '';
    if (this.state.showAlert) {
      document.getElementById("alert").style.display = "none";
    }

    
  }
  
  handleOptionChange(changeEvent){
    this.setState({
    selectedOption: changeEvent.target.value
  });
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.register.bind(this)}>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" className="form-control" ref="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" className="form-control" ref="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date Of Birth: </label>
            <input type="date" className="form-control" placeholder="dd/mm/yyyy" ref="dateOfBirth" />
          </div>
          
           <div className="form-group">
             
           <input id="male-gender" type="radio" name="gender" value="male" ref="male_gender" checked={this.state.selectedOption === 'male'} onChange={this.handleOptionChange} />
             <label htmlFor="male-gender">Male</label>
             <br /><input id="female-gender" type="radio" name="gender" value="female" ref="female_gender" checked={this.state.selectedOption === 'female'} onChange={this.handleOptionChange} />
             <label htmlFor="female-gender">Female</label>
            
           
          </div>
        
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="email" className="form-control" ref="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" className="form-control" ref="password" />
          </div>
          
                    <div className="center-align">
                      <input type="submit" className="btn" waves="light" value="Submit" />
                    </div>

        </form>
      </div>
    );
  }
}


            


export default RegForm;
