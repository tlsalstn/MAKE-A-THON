import React from 'react';
import ReactDOM from 'react-dom';
import {    
    BrowserRouter
} from 'react-router-dom';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import './index.css';

import Report from './stores/Report';
// import Main from './components/Main';
// import Login from './components/Login';
// import FindMap from './containers/Map';

const report = new Report();

ReactDOM.render(
    <Provider report={report}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
