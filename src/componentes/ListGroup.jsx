import PropTypes, { array, string } from "prop-types";


function ListGroup({ item, ancho }) {
  console.log({ item });
  const style_container = {
    width: ancho,
  };
  return (
    <ul className="list-group" style={style_container}>
      {item.slice(0, 3).map((value, index) => (
        <li key={index} className="list-group-item" style={{ fontSize: "10px" }}>
          {value}
        </li>
      ))}
    </ul>
  );
}

ListGroup.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string),
  ancho: PropTypes.number,
};

export default ListGroup;

