/**
 * Footer.js
 * @private
 */

import React from "react";

import FooterBar from "./FooterBar";
import Nav from "./Nav";

import * as translationEN from "../../../locales/en.json";

const Footer = () => (
    <footer>
        <Nav pages={translationEN.pages} />
        <FooterBar />
    </footer>
);

export default Footer;