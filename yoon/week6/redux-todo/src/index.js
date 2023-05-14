import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// store와 provider import
import store from './redux/config/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // App을 Provider로 감싸고, configStore에서 export default한 store를 넣어준다.
  <Provider store={store}>
    <App />
  </Provider>
);
