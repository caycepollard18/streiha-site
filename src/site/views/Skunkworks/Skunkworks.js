/**
 * Skunkworks.js
 * @private
 */

import React from "react";

import LoginForm from "Components/LoginForm/LoginForm";
import withPageTransition from "Components/withPageTransition/withPageTransition";

class Skunkworks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(authenticated) {
        this.setState({
            isAuthenticated: authenticated
        });
    }

    render() {
        return (
            <LoginForm handleAuth={this.handleAuth} />
        );
    }
}

const SkunkworksWithPageTransition = withPageTransition(Skunkworks);

export default SkunkworksWithPageTransition;