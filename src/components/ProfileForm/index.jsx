import { ProfileLabel } from "../ProfileLabel"
import { ProfileButton } from "../ProfileButton"

export const ProfileForm = (props) => {
    const { email } = props;

    return(
        <form action="/" method="put" id="info">
            <ProfileLabel label= "Email: " type="email" id="email" placeholder={email}/>
            <ProfileLabel label= "Confirmar Email: " type="email" id="confirmEmail"/>
            <ProfileLabel label= "Senha: " type="password" id="password"/>
            <ProfileLabel label= "Confirmar Senha: " type="password" id="confirmPassword"/>
            <ProfileButton type="submit" content="Atualizar"/>
        </form>
    )
}