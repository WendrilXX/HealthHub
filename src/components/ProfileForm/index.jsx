import { ProfileLabel } from "../ProfileLabel"
import { ProfileButton } from "../ProfileButton"

export const ProfileForm = (props) => {
    const { email } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, confirmEmail, password, confirmPassword } = e.target;
        
        if(email.value === confirmEmail.value && password.value === confirmPassword.value){
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);

            alert('Usuário atualizado!');
            window.location.href = '/perfil';
        }
        else{
            alert('Erro ao atualizar!');
            window.location.href = '/perfil';
        }
    }

    return(
        <form action="/" method="put" id="info" onSubmit={handleSubmit}>
            <ProfileLabel label= "Email: " type="email" id="email" placeholder={email}/>
            <ProfileLabel label= "Confirmar Email: " type="email" id="confirmEmail"/>
            <ProfileLabel label= "Senha: " type="password" id="password"/>
            <ProfileLabel label= "Confirmar Senha: " type="password" id="confirmPassword"/>
            <ProfileButton type="submit" content="Atualizar"/>
        </form>
    )
}