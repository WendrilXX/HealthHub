import Botao from '../botao/Botao';
import './header.css'
// import CampoPesquisa from './pesquisa/pesquisa';
function Header(){
    return(
        <div className='body-header'>

            <h1 className='titulo-header'>HealthHub</h1>
            
            <img src="../src/assets/user.png" className='img-user'/>
             <img src="../src/assets/mao.png" className='img-mao'/>
             <div className='botoes-header'>
                {/* <Botao className='botoes-div'/> */}
             </div>
             
            {/* <CampoPesquisa /> */}
          
        </div>
    )
    
}
export default Header;