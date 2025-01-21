import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import Head from "../componentes/Head";
import Puntuacion from "../componentes/Puntuacion";
import ListGroup from "../componentes/ListGroup";
import ListGroupReputacion from "../componentes/ListGroupReputacion";
import TablaPrecios from "../componentes/TablaPrecios";
import Calificar from "./Calificar";

const style_list_group = {
  display: "flex",
  padding: 20,
  justifyContent: "center",
};

const PetSitter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { item, user } = location.state || {};

  const handleOnClickCalificar = () => {
    navigate("/calificar", { state: {item,user}});
  };

  const handleClickContratar = () => {
    navigate("/Contratar", { state: {item,user }});
  };

  return (
    <>
      <Head title={"PetSitter"} description={"PetSitter"} />
      <NavBar style={{ zIndex: 1000 }} user={user}/>
      <img
        style={({ height: "300px" }, { padding: 20 })}
        src="./png/avatar.png"
      />
      <h3>{item.nombreCompleto}</h3>
      <Puntuacion score={item.score} />
      <TablaPrecios data={item.precios} />
      <div style={style_list_group}>
        <span>
          <h2>Zonas</h2>
          <ListGroup item={item.zonas} ancho={250} />
        </span>
        <span>
          <h2>Actividades</h2>
          <ListGroup item={item.actividades} ancho={250} />
        </span>
        <span>
          <h2>Reputacion</h2>
          <ListGroupReputacion item={item.reputacion} ancho={250} />
        </span>
      </div>
      <button onClick={handleOnClickCalificar}>Calificar</button>
      <button onClick={handleClickContratar}>Contratar</button>
    </>
  );
};

export default PetSitter;
