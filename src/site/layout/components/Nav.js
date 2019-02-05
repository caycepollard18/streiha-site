/**
 * Nav.js
 * @private
 */

import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const pages = props.pages;

    const navItems = pages.map((page) => (
        <NavLink key={page.slug} to={`/${page.slug}`}>{page.title}</NavLink>
    ));

    return (
        <nav>
            {navItems}
        </nav>
    );
};

Nav.propTypes = {
    pages: PropTypes.array.isRequired,
};

export default Nav;