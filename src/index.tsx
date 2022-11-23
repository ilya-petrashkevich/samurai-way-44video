import React from 'react';
import './index.css';
import /*{*/store/*}*/ from "./components/redux/redux-store"; //import {store} from "./components/redux/store";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./StoreContext";


const rerenderEntireTree = (/*state: StateType*/) => {
    ReactDOM.render(
        <Provider store={store}>
            <App /*store={store}*/ />
        </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();
