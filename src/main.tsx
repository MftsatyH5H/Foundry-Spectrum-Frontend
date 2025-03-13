import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import './style/style.scss';
import { Provider } from 'react-redux';
import { store } from './state/store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// import store from './state/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
