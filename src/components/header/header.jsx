import { Link } from 'phosphor-react';
import Botao from '../botao/Botao';
import './header.css'
import { Route } from 'react-router-dom';
// import CampoPesquisa from './pesquisa/pesquisa';
const Header = () => {
    const handleClearClick = () => {
        localStorage.clear();
        window.location.href = '/login';
    }


    return(
        <div className='body-header'>

            <h1 className='titulo-header' onClick={() => {window.location.href = '/home'}}>HealthHub</h1>

            <img src="../src/assets/Profile-circle.png" className='img-user' onClick={() => {window.location.href = '/perfil'}}/>
            <img src="../src/assets/mao.png" className='img-mao'/>
            <img src="../src/assets/sair-header.png" alt="sair"className='img-sair' onClick={handleClearClick}/>

            <div className='botoes-header'>
                {/* <Botao className='botoes-div-header' propButton='Home'/> */}
                 <Botao className='botoes-div-header' propButton='Recursos'/> 
                 <Botao className='botoes-div-header' propButton='Profissional'/> 
                 <Botao className='botoes-div-header' propButton='Grupos'/>
                 <Botao className='botoes-div-header' propButton='Consultas'/> 
                 <Botao className='botoes-div-header' propButton='Suporte'/> 
                 <Botao className='botoes-div-header' propButton='Anotações'/> 
                 <Botao className='botoes-div-header' propButton='Feedback'/> 
            </div>

            {/*
             */}
             
            {/* <CampoPesquisa /> */}
          
        </div>
    )
}
 
export default Header;