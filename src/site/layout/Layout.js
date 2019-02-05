/**
 * Layout.js
 * @private
 */

import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header>
                <div className="inscript">
                    {props.children}
                </div>
            </Header>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;