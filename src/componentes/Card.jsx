import ListGroup from "./ListGroup";
import Puntuacion from "./Puntuacion";

function Card() {
  return (
    <div className="card" style={({ height: "400px" }, { width: "300px" })}>
      <div className="card-body">
        <img style={{ width: "100px" }} src="./png/avatar.png" />
        <h5 className="card-title">Nombre</h5>
        <Puntuacion score={4} />
        <div style={{ display: "flex" }}>
          <ListGroup />
          <ListGroup />
        </div>
        <div style={{ flex: 1 }}>
          <span href="#" className="btn btn-primary" style={{ margin: "10px" }}>
            Ver Mas
          </span>
          <span href="#" className="btn btn-primary">
            Contactar
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
