const FormaDeBolo = ({ sabor = "Festa" }) => {
    return (
        <h1> Bolo sabor {sabor}</h1 >
        // <>
        //     {
        //         sabor ? (
        //             <h1> Bolo sabor {sabor}</h1 >
        //         ) : (
        //             <h1>Informe o sabor</h1>
        //         )
        //     }
        // </>
    );
}

export default FormaDeBolo;