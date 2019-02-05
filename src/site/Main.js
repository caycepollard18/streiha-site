/**
 * Main.js
 * @private
 */

import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import About from "Views/About/About";
import Contact from "Views/Contact/Contact";
import Home from "Views/Home/Home";
import NotFound from "Views/NotFound/NotFound";
import PrivacyNotice from "Views/PrivacyNotice/PrivacyNotice";
import Skunkworks from "Views/Skunkworks/Skunkworks";

import * as translationEN from "../locales/en.json";

// Registry name must correspond to component's filename

const registry = {
    "About": About,
    "Contact": Contact,
    "Skunkworks": Skunkworks
};

const RouteList = (props) => {
    const routes = props.routes;

    const routeItems = routes.map((route) => (
        <Route key={route.slug} path={`/${route.slug}`} component={registry[route.component]} />
    ));

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            {routeItems}
            <Route path="/privacy" component={PrivacyNotice} />
            <Route component={NotFound} />
        </Switch>
    );
};

class Main extends React.Component {

    render() {
        return (
            <Layout>
                <RouteList routes={translationEN.pages} />
            </Layout>
        );
    }
}

export default Main;