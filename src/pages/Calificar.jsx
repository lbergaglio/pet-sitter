import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";
import CheckpointList from "../componentes/CheckpointList";

const Calificar = () => {
  const location = useLocation();
  const { item, user } = location.state;
  console.log(user);

  const [selectedCheckpoints, setSelectedCheckpoints] = useState({ puntuacion: null });
  const [descripcion, setDescripcion] = useState("");

  const handleCheckpointSelection = (category, checkpoint) => {
    setSelectedCheckpoints((prevSelected) => ({
      ...prevSelected,
      [category]: checkpoint,
    }));
  };

  const puntuacion = [0, 1, 2, 3, 4, 5];

  const calcularNuevoScore = (itemList) => {
    console.log(itemList);
    let total = 0;
    const cantidad = itemList.length;
    itemList.forEach((item) => {
      total += item.valor;
    });
    return total / cantidad;
  };

  const handleOnClickCalificar = async () => {
    try {
      const datosCalificacion = {
        valor: selectedCheckpoints.puntuacion,
        opinion: descripcion,
      };

      
      await axios.put(`http://localhost:3000/AppPetSitters/petSitters/${item.email}/reputacion`, { nuevaOpinion: datosCalificacion });

      alert('Perfil del cuidador de mascotas actualizado correctamente.');

    
      const response = await axios.get(`http://localhost:3000/AppPetSitters/petSitters/email/${item.email}`);
      const itemUpdated = response.data;

      const nuevoScore = Math.ceil(calcularNuevoScore(itemUpdated.reputacion));
      console.log(nuevoScore);

      await axios.put(`http://localhost:3000/AppPetSitters/petSitters/${itemUpdated.email}/score/`, {
        score: nuevoScore
    
      });

    } catch (error) {
      console.error('Error al actualizar perfil del cuidador de mascotas:score', error);
      alert('Error al actualizar perfil del cuidador de mascotas. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <>
      <Head title={"Mi Perfil"} description={"Mi Perfil"} />
      <NavBar style={{ zIndex: 1000 }} user={user} />
      <h1>Calificar</h1>
      <h3>{item.nombreCompleto}</h3>
      <div>
        <CheckpointList
          checkpoints={puntuacion}
          title={"Puntuacion"}
          selectedCheckpoint={selectedCheckpoints.puntuacion}
          onCheckpointSelect={(checkpoint) =>
            handleCheckpointSelection("puntuacion", checkpoint)
          }
        />
        <h3>Descripcion</h3>
        <textarea
          style={{ width: 350, height: 200 }}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <button onClick={handleOnClickCalificar}>Subir Calificacion</button>
    </>
  );
};

export default Calificar;
