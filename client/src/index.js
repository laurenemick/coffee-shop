import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import App from "./App";
import { reducer } from "./reducers";

import "./index.css";

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
