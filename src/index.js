import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import { store } from './stores/index.js';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

render(
    <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'));
