import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

export default (
    <Route path='/' component={App}/>
);

function errorLoading(err) {
    console.error('Could not load the route', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

export default {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('./modules/main/Main.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: 'hashtag-autocompletion-with-draftjs',
            getComponent(location, cb) {
                System.import('./modules/hashtag-autocompletion-demo/DemoPage.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
};
