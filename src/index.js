import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crea una raíz para renderizar elementos en el nodo HTML con el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

