/**
 * About.js
 * @private
 */

import React from "react";

const AboutCopy = "STREIHA is a creative research service.";

class About extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p>{AboutCopy}</p>
            </React.Fragment>
        );
    }
}

export default About;