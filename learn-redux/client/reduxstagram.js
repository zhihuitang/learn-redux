// let's go!

import React from 'react';
import { render } from 'react-dom';
// import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

console.log(sentry_url);
Raven.config(sentry_url, {
    tags: {
        author: 'Tang',
        city: 'Stockholm'
    }
}).install();

/**
 * Raven test
 */
Raven.captureMessage('test Raven: Raven initialed');

Raven.showReportDialog();

logException(new Error('init failed"'), {
    email: 'crafttang@gmail.com',
    notes: 'this is just a demo'
})

/**
 * Raven test
 */

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single}/>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
