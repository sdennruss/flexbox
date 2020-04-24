import React from 'react';
import Joi from "joi-browser"
import Form from './form';

export class LoginForm extends Form{
    state ={
        data: {email: '', password: ''},
        errors: {}
    }

    schema = {
        email: Joi.string().required().label("Email"),
        password: Joi.string().required().label("Password")
    }

   doSubmit = () =>{
    //    calling the server
       console.log("submitted")
   }

    render() { 
        return ( 
        <div className="login-container">
            <form className = "login-form" onSubmit={this.handleSubmit}>
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('Login')} 
            </form>    
        </div>
        );
    }
}
 
export default LoginForm;