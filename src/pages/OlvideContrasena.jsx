import { Link } from "react-router-dom";
//import axios from "axios";
import Button from "../componentes/Button";
import logo from "../../png/PetSitting.png";
//import { useState } from "react";

const style_container = {
  height: "100%",
  backgroundColor: "pink",
};

const handleOnClickregistrarse = () => {};

const IniciarSesion = () => {
  const handleOnClickIniciarSesion = () => {
    this.props.history.pus("/home");
  };

  return (
    <div style={style_container}>
      <img src={logo} alt="" />
      <input></input>
      <input></input>
      <Link>Olvidaste tu contrasena?</Link>
      <Link to={"/home"}>
        <Button onClick={handleOnClickIniciarSesion}>Iniciar Sesion</Button>
      </Link>
      <Link to={"/registrarse"}>
        {" "}
        <Button onClick={handleOnClickregistrarse}>Registrarse</Button>
      </Link>
    </div>
  );
};

export default IniciarSesion;
