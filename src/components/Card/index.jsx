import "./index.css";

const Card = () => {
    return (
        <div className="card">
            <img className="card-img" src="https://biblioo.info/wp-content/uploads/2013/07/Luciana-Pereira-Rodrigues-Livro-e-leitura-no-Brasil.jpg" alt="" />
            <h3 className="card-title">Titulo do card</h3>
            <p className="card-describe">Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur fuga similique.</p>
            <button className="card-btn">Leia mais</button>
        </div>
    );
}
 
export default Card;