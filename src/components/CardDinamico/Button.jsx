const Button = ({label, onClick = null}) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
}
 
export default Button;