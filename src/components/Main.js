import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ComparatorContainer } from './Comparator';
import Info from './Info';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/info' component={Info} />
            <Route path='/' component={ComparatorContainer} />
        </Switch>
    </main>
);

export default Main;