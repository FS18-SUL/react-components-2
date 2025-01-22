const CardModules = () => {
    const styles = {
        card: {
            width: 300,
            borderRadius: 11,
            border: '1px solid #CCC',
            padding: 16
        },
        cardImg: {
            width: '100%'
        }
    }

    return (
        <div style={styles.card}>
            <img style={styles.cardImg} src="https://biblioo.info/wp-content/uploads/2013/07/Luciana-Pereira-Rodrigues-Livro-e-leitura-no-Brasil.jpg" alt="" />
            <h3>Titulo do card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur fuga similique.</p>
            <button>Leia mais</button>
        </div>
    );
}
 
export default CardModules;