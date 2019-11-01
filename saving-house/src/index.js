import React from 'react';
import ReactDOM from 'react-dom';
import {    
    BrowserRouter
} from 'react-router-dom';
import App from './App';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';
import './index.css';

import emap from './stores/KakaoMap';
// import Main from './components/Main';
// import Login from './components/Login';
// import FindMap from './containers/Map';

const aou = new emap();

ReactDOM.render(
    <Provider store={aou}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
