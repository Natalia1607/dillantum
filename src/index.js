import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

ReactDOM.render(
    <HashRouter basename="/">
        <StateProvider initialState={initialState} reducer={reducer}>
            <App /> 
        </StateProvider>
    </HashRouter>, 
document.getElementById('root')
);