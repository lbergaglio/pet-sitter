import React, { useState, useEffect } from "react";
import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";

const MiPerfil = () => {
  const location = useLocation();
  const user = location.state; 
  console.log(user);

  const [nombreApellido, setNombreApellido] = useState("");

  useEffect(() => {
    if (user.nombreCompleto !== undefined) {
      setNombreApellido(user.nombreCompleto);
    } else if (user.name !== undefined && user.surname !== undefined) {
      setNombreApellido(`${user.name} ${user.surname}`);
    }
    else setNombreApellido("No se encontro nombre")
  }, [user]); 

  return (
    <>
      <Head title={"Mi Perfil"} description={"Mi Perfil"} />
      <NavBar style={{ zIndex: 1000 }} user={user} />
      <img
        style={{ height: "300px", padding: "20px" }} 
        src="./png/avatar.png"
        alt="Avatar"
      />
      <h3>{nombreApellido}</h3>
      <h3>{user.email}</h3>
      <h3>{user.city}</h3>
      <h3>{user.adress}</h3>
    </>
  );
};

export default MiPerfil;
