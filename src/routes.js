import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
// import Artist from './components/Artist';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path="/artist" component={Artist} />  */}
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;