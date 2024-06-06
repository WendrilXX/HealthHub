import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth  from "../hooks/useAuth"
// import { App } from "../pages/App";             ///pagina home
import Login from "../pages/Login";             ///Página de Login
import Register from "../pages/Register";             ///Página de Login
import Home from "../pages/Home";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={App} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />   
          <Route path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;