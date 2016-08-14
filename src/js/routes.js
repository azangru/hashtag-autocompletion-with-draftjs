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
                System.import('./modules/showcase/Showcase.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        },
        {
            path: 'uploader',
            getComponent(location, cb) {
                System.import('./modules/uploader/Uploader.jsx')
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    ]
};
