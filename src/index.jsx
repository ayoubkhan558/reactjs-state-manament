import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './App';
import { AuthProvider } from '@context/authContext';
import { RecoilRoot } from "recoil";
// easy-peasy
import { StoreProvider } from 'easy-peasy';
import store from '@context/AuthContextEasypeasy';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <Router>
      <RecoilRoot>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </RecoilRoot>
    </Router>
  </AuthProvider>
);
