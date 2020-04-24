import React from 'react';
import Form from '../loginform/form';
import Joi from "joi-browser"

class Register extends Form {
    state = { 
        data: {firstName: '', lastName: '', email: '', password: ''},
        errors: {},
        registration: []
     }

    schema = {
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().email({ minDomainAtoms: 2 }).label('Email'),
        password: Joi.string().min(8).max(30).label('Password')
    }

    render() { 
        return ( 
            <React.Fragment>
            <div className="register-container">
                <form className= "register-form" onSubmit = {this.handleSubmit}>
                <h1>Register</h1>
                {this.renderInput("firstName", "First Name")}
                {this.renderInput("lastName", "Last Name")}
                {this.renderInput("email", "Email Address")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton('Register')}
                </form>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Register;