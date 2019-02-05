/**
 * withpageTransition.js
 * @private
 */

import React from 'react';

import { pageFadeIn, pageFadeOut } from "./withPageTransitionMethods";

import "./withPageTransition.css";

function withPageTransition(WrappedComponent) {
    return class extends React.Component {
        
        componentDidMount() {
            pageFadeIn('skunkworks');
        }

        componentWillUnmount() {
            pageFadeOut('skunkworks');
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    };
}

export default withPageTransition;