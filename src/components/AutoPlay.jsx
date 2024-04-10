import Slider from "react-slick";
import Card from "./Card";
import Card1 from '../images/1.jpg'
import Card2 from '../images/2.jpg'
import Card3 from '../images/3.webp'
import Card4 from '../images/4.webp'

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Card titulo={"As relações entre meio ambiente e cidades inteligentes"} descricao={"Aplicação da tecnologia pura e simples em um espaço urbano, o aproveitamento eficiente de recursos naturais é o que ajuda a transformar uma cidade em uma smart city."} 
          image={Card1}/>
        </div>
        <div>
          <Card titulo={"Tecnologia melhorando a qualidade de vida de todos"} descricao={"A modernização urbana por meio da tecnologia contribui para elevar o bem-estar coletivo. Ao otimizar o uso de recursos naturais e implementar soluções inovadoras."} image={Card2}/>
          </div>
        <div>
          <Card titulo={"Saúde conectada"} descricao={"Como a tecnologia impacta a qualidade de vida dos curitibanos. Com a aplicação da tecnologia à saúde, instituições curitibanas salvam vidas, promovem bem-estar e fortalecem os laços comunitários."} image={Card3}/>
          </div>
        <div>
          <Card titulo={"Veja como melhorar sua relação com a tecnologia"} descricao={"O Dia do Bem-Estar Digital é celebrado nesta sexta-feira (5) como um movimento global que dissemina boas práticas para uma relação saudável com a tecnologia, incentivando o equilíbrio da tecnologia."} image={Card4}/>
        </div>

      </Slider>
    </div>
  );
}

export default AutoPlay;
