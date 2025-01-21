import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import TablaPrecios from "../componentes/TablaPrecios";
import CheckpointList from "../componentes/CheckpointList";
import axios from "axios";

const style_checkpoints = {
  display: "flex",
  justifyContent: "center",
};

const Contratar = () => {
  const location = useLocation();
  const { item, user } = location.state || {};

  const [selectedCheckpoints, setSelectedCheckpoints] = useState({
    horarios: null,
    actividades: null,
    animales: null,
    frecuencia: null,
  });

  const handleCheckpointSelection = (category, checkpoint) => {
    setSelectedCheckpoints((prevSelected) => ({
      ...prevSelected,
      [category]: checkpoint,
    }));
  };

  const handleOnClickContratar = async () => {
    try {
      const { horarios, actividades, animales, frecuencia } = selectedCheckpoints;
      const datosContratacion = {
        cliente: user,
        petSitter: item,
        horarios,
        actividades,
        animales,
        frecuencia,
      };
      if(user.nombreCompleto!==undefined){
      axios
      .put(`http://localhost:3000/AppPetSitters/petSitters/${user.email}/notificaciones`, {nuevaNotificacion:datosContratacion});
      alert('Perfil del cuidador de mascotas actualizado correctamente.');
      }
      else{
      axios
      .put(`http://localhost:3000/AppPetSitters/users/${user.email}/notifications`, {nuevaNotificacion:datosContratacion});
      alert('Perfil del usuario actualizado correctamente.');
      } 
      axios
      .put(`http://localhost:3000/AppPetSitters/petSitters/${item.email}/notificaciones`, {nuevaNotificacion:datosContratacion});
      alert('Perfil del cuidador de mascotas actualizado correctamente.');
    } catch (error) {
      console.error('Error al actualizar perfil del cuidador de mascotas:', error);
      alert('Error al actualizar perfil del cuidador de mascotas. Por favor, inténtalo nuevamente.');
    }
    console.log("Datos de Contratación:", selectedCheckpoints);
  };

  const horarios = item.horarios.flat().map(String);
  const actividades = item.actividades.flat().map(String);
  const animales = item.animales.flat().map(String);
  const frecuencia = ["Unico", "Diario", "Semanal", "Mensual"];

  return (
    <>
      <Head title={"PetSitter"} description={"PetSitter"} />
      <NavBar user={user} />
      <h1>{item.nombreCompleto}</h1>
      <TablaPrecios data={item.precios} />
      <div style={style_checkpoints}>
        <CheckpointList
          checkpoints={horarios}
          title={"Horarios"}
          selectedCheckpoint={selectedCheckpoints.horarios}
          onCheckpointSelect={(checkpoint) =>
            handleCheckpointSelection("horarios", checkpoint)
          }
        />
        <CheckpointList
          checkpoints={actividades}
          title={"Servicio"}
          selectedCheckpoint={selectedCheckpoints.actividades}
          onCheckpointSelect={(checkpoint) =>
            handleCheckpointSelection("actividades", checkpoint)
          }
        />
        <CheckpointList
          checkpoints={animales}
          title={"Mascota"}
          selectedCheckpoint={selectedCheckpoints.animales}
          onCheckpointSelect={(checkpoint) =>
            handleCheckpointSelection("animales", checkpoint)
          }
        />
        <CheckpointList
          checkpoints={frecuencia}
          title={"Frecuencia"}
          selectedCheckpoint={selectedCheckpoints.frecuencia}
          onCheckpointSelect={(checkpoint) =>
            handleCheckpointSelection("frecuencia", checkpoint)
          }
        />
      </div>
      <button onClick={handleOnClickContratar}>Contratar</button>
    </>
  );
};

export default Contratar;
