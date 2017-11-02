import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import reducers from './reducers';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers,
  applyMiddleware(thunk) //saying before you go to reducers, apply middleware.
);

ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')

);

registerServiceWorker();
