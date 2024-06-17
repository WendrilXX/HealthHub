import { ProfileInput } from "../ProfileInput/index";

export const ProfileLabel = (props) => {
    const {label, id, type, placeholder} = props;

    return(
        <label htmlFor={id}>
            {label}
            <ProfileInput type={type} id={id} placeholder={placeholder}/>
        </label>
    )
};