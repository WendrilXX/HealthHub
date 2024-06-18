import "./styles.css";
import { Component } from 'react';
import { ProfileForm } from "../../components/ProfileForm";

class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: localStorage.getItem('email'),
            senha: localStorage.getItem('password')
        }
    }

    componentDidMount(){
        const email = localStorage.getItem("email");
        const senha = localStorage.getItem("password");
        
        if(!email || !senha){
            window.location.href = "/login";
            return;
        }
    }

    render(){
        const {email, senha} = this.state;

        return(
            <div className="profilePage">
                {!email || !senha ? (
                    <h1 className="titulo-profile-page">Faça login para acessar a página do perfil</h1>
                ) : (
                    <>
                    <div className="main-perfil">
                    <h1 className="titulo-perfil">Editar Perfil</h1>
                        <div className="userInfo">
                            <div className="tituloh2-profile">
                                <h2>Informações do Usuário</h2>
                            </div>
                           
                            <ProfileForm email={email}/>
                        </div>
                    </div>
                       
                    </>
                )}
            </div>
        );
    }
}

export default Perfil;