import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "../../pages/index"
import ProductPage from "../../pages/ProductPage/ProductPage"

export default ( 
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/product" component={ProductPage}/>
        </Switch>
    </Router>
);