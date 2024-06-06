import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./responsive.css";
import RoutesApp from './routes/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
   <RoutesApp/>   {/*  é quem cotrola as rotas de acrodo em que url o usuario esta */}
  </React.StrictMode>,
)
