// Importações
import './Login.css'
import React, { useState } from "react";
import Logo from "../../assets/autismo.png";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Importação adicionada

import DarkModeToggle from 'react-dark-mode-toggle'

// Se deus quiser e o diabo não atrapalhar hj eu durmo antes das 4h da manhã
// const getThemeFromStorage = () => {
//   let theme = true
//   if (localStorage.getItem('theme')) {
//     theme = JSON.parse(localStorage.getItem('theme'))
//   }
//   return theme
// }

const Login = () => {

  // const [isDarkMode, setIsDarkMode] = useState(getThemeFromStorage())  
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.className = 'light-theme'
  //   } else {
  //     document.documentElement.className = 'dark-theme'
  //   }
  //   localStorage.setItem('theme', isDarkMode)
  // }, [isDarkMode])


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
    
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Usuário logado!');
    window.location.href = '/home';
  };
  
  return (
    <div className="login-main">
      
      {/* <div className="login-right"> */}
      {/* <DarkModeToggle
            className='toggler'
            size={50}
            onChange={setIsDarkMode}
            checked={isDarkMode}
          /> */}
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>HealthHub</h2>
            <p>Por favor entre com suas credenciais</p>
            <form onSubmit={handleSubmit}>
              <div className='email-input-div'>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Lembrar por 30 dias 
                  </label>
                </div>
                <Link to="/register" className="forgot-pass-link">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="login-center-buttons">
                <button type="submit" className='button-login'>Login</button>
                <button type="button" className='button-google'>
                  {/* <img src={GoogleSvg} alt="" /> */}
                  G+ Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Não tem uma conta? <Link to="/register">Registrar-se</Link>
          </p>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
