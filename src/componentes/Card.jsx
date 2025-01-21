import Puntuacion from "./Puntuacion";
import ListGroup from "./ListGroup";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useEffect from "react";
import axios from "axios";

const card_container = {
  height: "400px",
  width: "300px",
  backgroundColor: "#E3C3E3",
};

const card_image = {
  width: "100px",
};

const Card = ( {item ,user}) => {
  const navigate = useNavigate();

  const handleClickVerMas = () => {
    try {
      if(user.nombreCompleto!==undefined){
      axios
      .put(`http://localhost:3000/AppPetSitters/petSitters/${user.email}/historial`, {nuevoHistorial:item});
      alert('Perfil del cuidador de mascotas actualizado correctamente.');
      }
      else{
      axios
      .put(`http://localhost:3000/AppPetSitters/users/${user.email}/history`, {nuevoHistorial:item});
      
      }
    } catch (error) {
      alert('Error al actualizar perfil del cuidador de mascotas. Por favor, inténtalo nuevamente.');
    }

    navigate("/petSitter", { state: {item,user}});
  };
  const handleClickContactar = () => {
    navigate("/contratar", { state: {item,user}});
  };

  return (
    <div className="card" style={card_container}>
      <div>
        <img style={card_image} src="./png/avatar.png" />
        <h5>{item.nombreCompleto}</h5>
        <Puntuacion score={item.score} />
        <div style={{ display: "flex" }}>
          <ListGroup item={item.zonas} ancho={110} />
          <ListGroup item={item.actividades} ancho={110} />
        </div>
        <div style={{ flex: 1 }}>
          <button
            href="#"
            className="btn btn-primary"
            style={{ margin: "10px" }}
            onClick={handleClickVerMas}
          >
            Ver Mas
          </button>
          <button
            href="#"
            className="btn btn-primary"
            onClick={handleClickContactar}
          >
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object,
  user: PropTypes.object
};
