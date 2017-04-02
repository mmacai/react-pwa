import React from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import Detail from './Detail';
import './index.css';

const history = useRouterHistory(createHistory)({
    basename: '/'
});

render((
    <Router history={history}>
        <Route path="/" component={App} />
        <Route path="detail" component={Detail} />
    </Router>
), document.getElementById('root'));
