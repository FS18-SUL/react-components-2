import Card from "./components/Card";
import { CardDinamico } from "./components/CardDinamico";
import CardModules from "./components/CardModules";
import CardStyled from "./components/CardStyled";
import FormaDeBolo from "./components/FormaDeBolo";

const App = () => {
  return (
    <>
      <Card />
      <CardModules />
      <CardStyled />
      <CardStyled temBotao />
      <CardDinamico.Container>
        <CardDinamico.Image src={"https://biblioo.info/wp-content/uploads/2013/07/Luciana-Pereira-Rodrigues-Livro-e-leitura-no-Brasil.jpg"} />
        <CardDinamico.Title title={"Titulo do card dinamico"} />
        <CardDinamico.Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur fuga similique."} />
        <CardDinamico.Button label={"Leia Mais"} />
      </CardDinamico.Container>
      <CardDinamico.Container>
        <CardDinamico.Title title={"Titulo do card dinamico"} />
        <CardDinamico.Image src={"https://biblioo.info/wp-content/uploads/2013/07/Luciana-Pereira-Rodrigues-Livro-e-leitura-no-Brasil.jpg"} />
        <CardDinamico.Text text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur fuga similique."} />
      </CardDinamico.Container>

      <FormaDeBolo />
      <FormaDeBolo sabor="Chocolate"/>
      <FormaDeBolo sabor="Morango" />
      <FormaDeBolo sabor="Formigueiro" />
    </>
  );
}
 
export default App;