import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import './style/style.scss';
import { Provider } from 'react-redux';
import { store } from './state/store/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AntdAppProvider from './components/ui/AntdAppProvider';
import { registerAxiosInterceptors } from './api/interceptors';

// import store from './state/store';

registerAxiosInterceptors();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <AntdAppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AntdAppProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
