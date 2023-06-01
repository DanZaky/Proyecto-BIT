import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m del centro</span>
        <span className="siTaxiOp">Hidratación gratuita</span>
        <span className="siSubtitle">
          Cancha Sintética Cubierta
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancelación gratis </span>
        <span className="siCancelOpSubtitle">
          Puedes cancelar luego, asegura este precio ya mismo!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes impuestos</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Ver disponibilidad</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;