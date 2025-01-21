import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const dropdown = {
  position: "relative",
  display: "inline-block",
  width: "100%",
};

const dropdown_toggle = {
  backgroundColor: "pink",
  height: "50px",
  width: 120,
  color: "black",
  border: "1 solid black",
  cursor: "pointer",
};

const dropdown_menu = {
  listStyle: "none",
  display: "block",
  right: 0,
  position: "absolute",
  backGroundColor: "white",
  width: "150px",
};

const dropdown_item = {
  padding: "1px",
  border: "1px solid black",
  backgroundColor: "pink",
};

const custom_link = {
  color: "black",
  textDecoration: "none",
  fontSize: 15,
  font: "Arial",
};

const MenuDesplegable = ( {user} ) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickPasarInfoAPerfil= () => {
    navigate("/miPerfil", {state: user});
  };
  const handleClickPasarInfoANotificaciones= () => {
    navigate("/notificaciones", {state: user});
  };
  const handleClickPasarInfoAHistorial= () => {
    navigate("/historial", {state: user});
  };
  const handleClickPasarInfoAReputacion= () => {
    navigate("/reputacion", {state: user});
  };
  const handleClickCerrarSesion= () => {
    navigate("/");
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={dropdown}>
      <button onClick={toggleMenu} style={dropdown_toggle}>
        Cuenta
      </button>
      {isOpen && (
        <ul style={dropdown_menu}>
          <li style={dropdown_item}>
            <button onClick={handleClickPasarInfoAPerfil}>MiPerfil</button>
          </li>
          <li style={dropdown_item}>
          <button onClick={handleClickPasarInfoANotificaciones}>Notificaciones</button>
          </li>

          <li style={dropdown_item}>
          <button onClick={handleClickPasarInfoAHistorial}>Historial</button>
          </li>

          <li style={dropdown_item}>
          <button onClick={handleClickPasarInfoAReputacion}>Reputacion</button>
          </li>

          <li style={dropdown_item}>
            <button onClick={handleClickCerrarSesion}>Cerrar Sesion</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuDesplegable;

MenuDesplegable.propTypes = {
  user: PropTypes.object,
};
