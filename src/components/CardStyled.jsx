import styled from "styled-components";

const CardStyledContainer = styled.div`
    width: 300px;
    border: 1px solid #CCC;
    padding: 16px;
    border-radius: 11px;
    & img{
        width: 100%;
        border-radius: 5px;
    }
    @media only screen and (max-width: 768px) {
        
    }
`;

const Button = styled.button`
    // props...

`;

const ButtonPill = styled(Button)`
    // props...
    
`;


const CardStyled = () => {
    return (
        <CardStyledContainer>
            <img className="card-img" src="https://biblioo.info/wp-content/uploads/2013/07/Luciana-Pereira-Rodrigues-Livro-e-leitura-no-Brasil.jpg" alt="" />
            <h3 className="card-title">Titulo do card</h3>
            <p className="card-describe">Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur fuga similique.</p>
            <button className="card-btn">Leia mais</button>
        </CardStyledContainer>
    );
}
 
export default CardStyled;