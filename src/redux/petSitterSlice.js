import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    nombreCompleto: "Luciano Bergaglio",
    score: 4,
    reputacion: [{ score: 3, descripcion: "Mas o Menos" }],
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 2,
    nombreCompleto: "Stella Bergaglio",
    score: 3,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 3,
    nombreCompleto: "Rene Bergaglio",
    score: 1,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 4,
    nombreCompleto: "Camila Bergaglio",
    score: 5,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 5,
    nombreCompleto: "Gladys Bergaglio",
    score: 5,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 6,
    nombreCompleto: "Juan Bergaglio",
    score: 5,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 7,
    nombreCompleto: "Miguel Bergaglio",
    score: 5,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
  {
    id: 8,
    nombreCompleto: "Eduardo Bergaglio",
    score: 5,
    zonas: ["Palermo", "Recoleta"],
    actividades: ["Paseo", "Cuidado"],
  },
];

export const petSitterSlice = createSlice({
  name: "petSitter",
  initialState,
  reducers: {
    addPetSitter: (state, action) => {
      const { id, nombreCompleto, score, zonas, actividades } = action.payload;
      state.id = id;
      state.nombreCompleto = nombreCompleto;
      state.score = score;
      //state.reputacion = reputacion;
      state.zonas = zonas;
      state.actividades = actividades;
    },
    /*addReputacion: (state, action) => {
      state.reputacion = action.payload;
    },*/
  },
});

export const { addPetSitter /* addReputacion */ } = petSitterSlice.actions;
export default petSitterSlice.reducer;
