/**
 * LoginFormInput.js
 * @private
 */

import React from 'react';
import PropTypes from 'prop-types';

const LoginFormInput = (props) => (
    <input
        id={props.type}
        type={props.type}
        {...props}
    />
);

LoginFormInput.propTypes = {
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default LoginFormInput;