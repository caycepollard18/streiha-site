/**
 * FooterBar.js
 * @private
 */

import React from "react";
import { NavLink } from "react-router-dom";

import "./FooterBar.css";

const FooterBar = (props) => (
    <aside className="carriage">
        <span className="cookies"><NavLink to="/privacy">"We Care About Your Privacy."</NavLink></span>
        <span>
            <span className="copyright">(C) 2018 STREICHHOLZHÄNDLER, CO.</span>
        </span>
    </aside>
);

export default FooterBar;