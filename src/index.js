import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { store } from './stores/index.js';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

render(
    <Provider store={store}>
        {/* <Router route={route} history={history} /> */}
        <App />
    </Provider>, document.getElementById('root'));
