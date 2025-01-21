import mongoose from "mongoose";

const Schema = mongoose.Schema;

const barriosCABA = [
  "Agronomía",
  "Almagro",
  "Balvanera",
  "Barracas",
  "Belgrano",
  "Boedo",
  "Caballito",
  "Chacarita",
  "Coghlan",
  "Colegiales",
  "Constitución",
  "Flores",
  "Floresta",
  "La Boca",
  "La Paternal",
  "Liniers",
  "Mataderos",
  "Monserrat",
  "Monte Castro",
  "Nueva Pompeya",
  "Núñez",
  "Palermo",
  "Parque Avellaneda",
  "Parque Chacabuco",
  "Parque Chas",
  "Parque Patricios",
  "Puerto Madero",
  "Recoleta",
  "Retiro",
  "Saavedra",
  "San Cristóbal",
  "San Nicolás",
  "San Telmo",
  "Vélez Sársfield",
  "Versalles",
  "Villa Crespo",
  "Villa del Parque",
  "Villa Devoto",
  "Villa General Mitre",
  "Villa Lugano",
  "Villa Luro",
  "Villa Ortúzar",
  "Villa Pueyrredón",
  "Villa Real",
  "Villa Riachuelo",
  "Villa Santa Rita",
  "Villa Soldati",
  "Villa Urquiza",
];

const mascotas = ["Perro","Gato","Tortuga","Loro","Chanchito","Conejo","Caballo","Coballo","Hamster"];

const servicios = ["Adiestramiento","Cuidador","Paseo"];

const petSitterSchema = new Schema({
  id: Number,
  nombreCompleto: String,
  email:String,
  password:String,
  city:String,
  adress:String,
  score: Number,
  precios:[[]],
  horarios:[{type:String}],
  reputacion: [{ valor: Number, opinion: String }],
  zonas: [{ type: [String],  enum: barriosCABA }],
  actividades: [{
    type: [String],
    enum: servicios,
  }],
  animales:[{type:String, enum:mascotas}],
  notificaciones:[],
  historial:[]
});
export default petSitterSchema;
