import '../styles/styles.scss'; // eslint-disable-line import/no-unresolved

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';


import routes from '~/routes';
import reducers from '~/state/reducers';

const store = createStore(
  reducers
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('main'));
