export const ProfileInput = (props) => {
    const {type, id, placeholder} = props;

    return(
        <input type={type} id={id} placeholder={placeholder ? (placeholder) : (null)}/>
    )
}