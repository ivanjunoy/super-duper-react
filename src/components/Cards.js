import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out These epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../assets/images/img-9.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Junble"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../assets/images/img-3.jpg")}
              text="Explore!"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../assets/images/img-2.jpg")}
              text="Agua azul y lanchas caras"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={require("../assets/images/img-4.jpg")}
              text="Canchita de fulbo papa!"
              label="Fulbo"
              path="/services"
            />
            <CardItem
              src={require("../assets/images/img-5.jpg")}
              text="Bares y el mejor servicio gastronomico"
              label="Noche"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
