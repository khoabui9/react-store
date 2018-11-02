import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "../../pages/index"

export default ( 
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
        </Switch>
    </Router>
);