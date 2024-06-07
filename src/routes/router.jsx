import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import useAuth  from "../hooks/useAuth"
import Login from "../pages/Login";             ///Página de Login
import Register from "../pages/Register";             ///Página de Login
import App from "../App";


//  isso aqui chama a função de autenticaç]ao do usuario 
//  pra saber se o fih duma egua ta logado, ou já fez login 
//  não ta funcionando ainda pq me expulsaram do time de desenvolvimento, mas os arquivos tão ai 
//  eles só precisam ser configurados corretamnete 

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Login />;
// };

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* <Route path="/home" element={<Private Item={App} />} /> */}
          <Route path="/home" element={<App/>} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />   
          <Route path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;