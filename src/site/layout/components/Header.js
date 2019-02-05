/**
 * Header.js
 * @private
 */

import React from "react";
import { NavLink } from "react-router-dom";

const PageTitle = () => (
    <h1><NavLink to="/">Streiha.</NavLink></h1>
);

const Header = (props) => (
    <header>
        <PageTitle />
        {props.children}
    </header>
);

export default Header;