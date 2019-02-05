/**
 * PrivacyNotice.js
 * @private
 */

import React from "react";

class PrivacyNotice extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="notice">
                    <p>STREIHA does not collect, transmit, or store any personal data about visitors to its website.</p>
                    <p>If you contact STREIHA by email, the information you provide will be stored for the purpose of
                        processing your request and for any possible follow-up questions. STREIHA will never share your
                        information with third parties, except in connection with legal proceedings or as required
                    by law or court order.</p>
                    <p>You have the right to receive information about, make amendments to, or request the deletion of
                        any personal data stored by STREIHA at any time. For all matters regarding data use, please
                        send an email to <a href="mailto:contact@streiha.com">contact@streiha.com</a>.</p>
                </div>
            </React.Fragment>
        );
    }
}

export default PrivacyNotice;