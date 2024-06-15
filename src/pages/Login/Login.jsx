import './Login.css'
import React, { useEffect, useState } from "react";
import Logo from "../../assets/autismo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";


const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>HealthHub</h2>
            <p>Por favor entre com suas credenciais</p>
            <form>
              <div className='email-input-div'>
                <input type="email" placeholder="Email" />
              </div>
              <div className="pass-input-div">
                <input type={showPassword? "text" : "password"} placeholder="Password" />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword? <FaEyeSlash /> : <FaEye />}
                </span>
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
                <button type="button" className='button-login'>Login</button>
                <button type="button" className='button-google'>
                  G+ Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem uma conta? <a href="#">Registrar-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
