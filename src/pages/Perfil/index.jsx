import "./styles.css";
import { Component } from 'react';
import { ProfileForm } from "../../components/ProfileForm";

class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "heitorsoaresviana@gmail.com",
            senha: "123456"
        }
    }

    render(){
        const {email, senha} = this.state;

        return(
            <div className="profilePage">
                <h1>Editar Perfil</h1>
                <div className="userInfo">
                    <h2>Informações do Usuário</h2>
                    <ProfileForm email={email}/>
                </div>
            </div>
        )
    }
}

export default Perfil;