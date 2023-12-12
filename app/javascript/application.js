// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { render, ReactDOM } from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from './packs/App';
import store from './packs/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    root
);
