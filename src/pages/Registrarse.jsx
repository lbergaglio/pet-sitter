import logo from "../../png/PetSitting.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mascotas = ["Perro","Gato","Tortuga","Loro","Conejo","Caballo","Coballo","Hamster"];

const servicios = ["Adiestramiento","Cuidador","Paseo"];

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

const Registrarse = () => {
  const navigate = useNavigate();

  const [petSitters, setPetSitters] = useState([]);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [isPetSitter, setIsPetSitter] = useState(false);
  const [paseo, setPaseo] = useState(false);
  const [adiestramiento, setAdiestramiento] = useState(false);
  const [cuidador, setCuidador] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [actividades, setActividades] = useState([]);
  const [zonas, setZonas] = useState([]);
  const [animales,setAnimales] = useState([]);
  const score = 0;
  const precios = [[]];
  const reputacion = [];
  const historial = [];
  const notificaciones = [];

  const handleCheckboxChangeZonas = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setZonas([...zonas, name]);
    } else {
      setZonas(zonas.filter((item) => item !== name));
    }
  };

  const handleCheckboxChangeActividades = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setActividades([...zonas, name]);
    } else {
      setActividades(zonas.filter((item) => item !== name));
    }
  };
  const handleCheckboxChangeMascotas = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setAnimales([...zonas, name]);
    } else {
      setAnimales(zonas.filter((item) => item !== name));
    }
  };

  const toggleServices = () => {
    setIsPetSitter(!isPetSitter);
  };

  const style_grid = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap:5,
  };

  const style_container_input = {
    display: "grid",
    padding:20,
    width: 350,
    margin: "auto",
    inlineSize:"auto"
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/AppPetSitters/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/AppPetSitters/petSitters")
      .then((response) => setPetSitters(response.data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleAddUser = async () => {
    if (!acceptTerms) {
      alert("Acepte Términos y Condiciones");
    } else if (password !== confirmPassword) {
      alert("Las contraseñas no son idénticas");
    } else {
      const newId = users.length + petSitters.length + 1;
      setId(newId);

      if (isPetSitter) {
        const nombreCompleto = name + " " + surname;
        const emailExists = petSitters.some((petSitter) => petSitter.email === email);

        if (!emailExists) {
          axios
            .post("http://localhost:3000/AppPetSitters/petSitters", {
              id: newId,
              nombreCompleto,
              email,
              address,
              password,
              score,
              precios,
              reputacion,
              zonas,
              actividades,
              animales,
              notificaciones,
              historial
            })
            .then((response) => setPetSitters([...petSitters, response.data]))
            .catch((error) => console.error("Error adding user:", error));
        } else {
          alert("El usuario ya existe");
        }
      } else {
        const emailExists = users.some((user) => user.email === email);

        if (!emailExists) {
          axios
            .post("http://localhost:3000/AppPetSitters/users", {
              id: newId,
              name,
              surname,
              email,
              telephone,
              password,
              city,
              address,
              historial,
              notificaciones,
            })
            .then((response) => setUsers([...users, response.data]))
            .catch((error) => console.error("Error adding user:", error));
        } else {
          alert("El usuario ya existe");
        }
      }
      navigate("/");
    }
    
  };

  return (
    <div>
      <img src={logo} alt="Logo" />
      <div style={style_container_input}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div>
        <input
          type="checkbox"
          checked={isPetSitter}
          onChange={toggleServices}
        />
        <span>Soy Proveedor de Servicios</span>
      </div>

      {isPetSitter && (
        <>
            <h6>Servicios</h6>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
            {servicios.map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  name={item}
                  checked={actividades.includes(item)}
                  onChange={handleCheckboxChangeActividades}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
          <h6>Mascotas</h6>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
            {mascotas.map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  name={item}
                  checked={animales.includes(item)}
                  onChange={handleCheckboxChangeMascotas}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
          <h6>Zonas</h6>
          <div style={style_grid}>
            {barriosCABA.map((item) => (
              <div key={item}>
                <input
                  type="checkbox"
                  name={item}
                  checked={zonas.includes(item)}
                  onChange={handleCheckboxChangeZonas}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </>
      )}

      <div>
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <span>Acepto Términos y Condiciones</span>
      </div>

      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Registrarse;
