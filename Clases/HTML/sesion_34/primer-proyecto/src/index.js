import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Importando componentes
import App from './App';
import Blog from './components/Blog';
import Menu from './components/Menu';
import Formulario from './components/Formulario';

//Importando el CSS de los componenetes
import "./components/Menu.css";

import reportWebVitals from './reportWebVitals';
import Tabla from './components/Tabla';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Tabla />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
