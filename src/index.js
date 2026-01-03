import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AppProvider } from './context/ProductContex';
import { AppProvider } from './context/productContex';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain =process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
// const apiUrl = process.env.REACT_APP_API_URL;

if (!domain || !clientId) {
  console.error("Missing Auth0 environment variables");
}

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    // apiUrl={apiUrl}
    // domain="dev-5olzzw64s5isgk3m.us.auth0.com"
    // clientId="h63xFmUUMTBa11MuQwvGdrAl5Js7HMc0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  
  </Auth0Provider>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
