import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);

reportWebVitals();
