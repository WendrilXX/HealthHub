import  './Register.css';
import React, { useEffect, useState } from "react";
import Logo from "../../assets/autismo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!email.includes("@")){
      alert("Por favor, insira um email válido.");
      return;
    }

    if(password.length < 3){
      alert("Por favor, insira uma senha com mais de 3 caracteres.");
      return;
    }
    // Salva o email e a senha no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Usuário registrado!');
    window.location.href = '/home';
  };


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
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
              <div className="pass-input-div">
                <input type={showPassword? "text" : "password"} placeholder="Password" />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword? <FaEyeSlash /> : <FaEye />}
                </span>
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Lembrar por 30 dias
                  </label>
                </div>
              </div>
              <div className="login-center-buttons">
                <Link to="/" className='button-login'>Registrar-se</Link>
                <button type="button" className='button-google'>
                  G+ Google
                <button type="submit">Login</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Entrar com o Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
