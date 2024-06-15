import  './Register.css';
import React, { useEffect, useState } from "react";
import Logo from "../../assets/autismo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

// Antes que falem mau! estou com sono! clonei a pagian de login, ai vc modifiquem e criem a pagina de registro 
//  se tiver um código muito doido, não se preocupem!, a musica que eu to ouvindo é mais louca KKKKk enfim..... vou escrever meu artigo fui
const Register = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">

      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Registro</h2>
            <p>É um prazer ter vc por aqui</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Lembrar por 30 dias
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Login</button>
                <button type="button">
                  Entrar com o Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem conta? <a href="#">Registra-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
