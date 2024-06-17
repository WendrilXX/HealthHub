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
        const {email} = this.state;

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