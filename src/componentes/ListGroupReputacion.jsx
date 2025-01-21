import PropTypes, { array, string } from "prop-types";
import Puntuacion from "./Puntuacion";
function ListGroupReputacion({ item, ancho }) {
  console.log({ item });
  const style_container = {
    width: ancho,
  };
  return (
    <ul className="list-group" style={style_container}>
      {item.slice(0, 3).map((value, index) => (
        <li key={index} className="list-group-item" style={{ fontSize: "10px" }}>
          <Puntuacion score={value.valor}/> {value.opinion}
        </li>
      ))}
    </ul>
  );
}

ListGroupReputacion.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.object),
  ancho: PropTypes.number,
};

export default ListGroupReputacion;

