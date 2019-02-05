/**
 * Contact.js
 * @private
 */

import React from "react";

import "./Contact.css";

import * as translationEN from "../../../locales/en.json";

const contactInfo = translationEN.pages.filter((page) => page["slug"] === "contact")[0];

const ContactEmail = (props) => {
    return (
        <li>
            <strong>{props.email.title}</strong>
            <span><a href={`mailto:${props.email.mailto}`}>{props.email.mailto}</a></span>
        </li>
    );
};

const ContactEmailList = (props) => {
    return (
        <ul className="contact-emails">
            {props.emails.length > 0 && props.emails.map((email) => <ContactEmail key={email.id} email={email} />)}
        </ul>
    );
};

const ContactCard = (props) => {
    return (
        <div className="contact-card card">
            <ContactEmailList emails={props.emails} />
            <div className="contact-copy">
                <p>Streiha is always looking for highly-skilled individuals
                to join our diverse team. If you're interested in working with us,
                send your résumé and a paragraph about what you'd like to
                contribute to the future to <a href="mailto:careers@streiha.com">careers@streiha.com</a>.</p>
            </div>
            <ul className="contact-social-media">
                <li><a href="https://www.instagram.com/streiha/">@streiha</a></li>
            </ul>
        </div>
    );
};

class Contact extends React.Component {

    render() {
        return (
            <ContactCard
                emails={contactInfo.content.emails}
            />
        );
    }
}

export default Contact;