import React from "react";
import { authenticationService } from "../../_services/authentication.service";

import "./sign-in.styles.css";

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            status: ""
        }
       this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        const {username, password} = this.state;
        authenticationService.login(username, password).then(
            user =>{
                console.log('user', user);
                this.setState({status: "login successfully !"});
            },
            error =>{
                console.log('error', error);
               // this.setState({status: error});
            }
        );
    }

    render(){
        return(
            <div className="sign-in-form">
                <label htmlFor="username">Username:</label>
                <input type="text" 
                name="username"
                className="username"
                onChange={this.handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input type="password" 
                onChange={this.handleChange}
                className="password"
                name="password"
                />
                <button className="signin-button"
                onClick = {this.handleSubmit}
                >SIGN IN</button>
                <label>{this.state.status}</label>
            </div>
        )
    }
}

export default SignIn;