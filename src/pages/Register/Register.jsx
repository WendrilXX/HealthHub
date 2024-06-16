import  './Register.css';
import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

// Antes que falem mau! estou com sono! clonei a pagian de login, ai vc modifiquem e criem a pagina de registro 
//  se tiver um código muito doido, não se preocupem!, a musica que eu to ouvindo é mais louca KKKKk enfim..... vou escrever meu artigo fui
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    if(!email.includes("@")){
      alert("Por favor, insira um email válido.");
      return;
    }

    if(password.length < 3){
      alert("Por favor, insira uma senha com mais de 3 caracteres.");
      return;
    }
    // Por simplicidade, vamos apenas armazenar os dados no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Usuário registrado!');
    // Redirecione para a página desejada após o login
    window.location.href = '/home';
  };


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
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
                <a href="#" className="forgot-pass-link">
                  Esqueceu a senha?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Login</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
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
