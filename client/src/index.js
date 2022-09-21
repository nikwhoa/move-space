/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import store from './store/store';
import './styles/reboot.scss';
import './styles/general.scss';
import './styles/media.scss';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
