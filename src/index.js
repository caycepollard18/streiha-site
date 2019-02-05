/**
 * index.js
 * @private
 */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import Main from "./site/Main";

import "./normalize.css";
import "./index.css";

const container = document.getElementById("root");

const Site = () => (
    <Router>
        <Main />
    </Router>
);

ReactDOM.render(<Site />, container);

// serviceWorker.unregister();