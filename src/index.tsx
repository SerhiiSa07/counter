import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from "./App2";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App2 />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
