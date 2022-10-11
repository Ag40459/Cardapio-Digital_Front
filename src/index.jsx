import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/pages/Home';
import { UserProvider } from './contexts/UserContext';
import './index.css';
import MainRoutes from './routes';
import Login from '../src/pages/Login/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      {/* <Home /> */}
      <Login />
    </UserProvider>
  </React.StrictMode>
)
