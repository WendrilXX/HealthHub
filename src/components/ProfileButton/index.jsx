export const ProfileButton = (props) => {
    const { type, content } = props;
    return (
        <button type={type}>{content}</button>
    )
}