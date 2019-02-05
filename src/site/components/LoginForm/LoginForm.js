/**
 * LoginForm.js
 * @private
 */

import React from "react";
import PropTypes from "prop-types";

import LoginFormInput from "./LoginFormInput.js";
import SampleAuth from "./SampleAuth.js";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            handleAuth: this.props.handleAuth
        }

        this.validateForm = this.validateForm.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleFormChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleFormSubmit = async event => {
        event.preventDefault();

        const random_boolean = Math.random() >= 0.5;

        try {
            await SampleAuth(this.state.username, this.state.password);
            // alert("Logging in ...");
            this.props.handleAuth(random_boolean);
        } catch (error) {
            // alert(error.message);
        }
    }

    render() {
        return (
            <form className="login" onSubmit={this.handleFormSubmit}>
                <LoginFormInput type="username" onChange={this.handleFormChange} value={this.state.username} />
                <LoginFormInput type="password" onChange={this.handleFormChange} value={this.state.password} />
                <input type="submit" value="LOGIN" disabled={!this.validateForm()} />
            </form>
        );
    }
}

export default LoginForm;