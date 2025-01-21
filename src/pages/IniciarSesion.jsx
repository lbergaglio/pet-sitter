import { Link } from "react-router-dom";
import logo from "../../png/PetSitting.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style_container = {
  backgroundColor: "pink",
};

const handleOnClickregistrarse = () => {};

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [petSitter, setPetSitter] = useState(null);
  const [isPetSitter,setIsPetSitter] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const resUser = await axios.get(`http://localhost:3000/AppPetSitters/users/`);
        if (resUser != null) setUser(resUser.data);
        const resPetSitter = await axios.get(`http://localhost:3000/AppPetSitters/petSitters/`);
        if (resPetSitter != null) setPetSitter(resPetSitter.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchItem();
  }, []);

  const handleOnClickIniciarSesion = async () => {
    if(isPetSitter){
      try {
        const res = await axios.get(`http://localhost:3000/AppPetSitters/petSitters/email/${email}`);
        if (res != null && res.data.password === password) {

          alert("PetSitter encontrado")
          setUser(res.data);
          navigate("/home", { state: res.data });
        } else {
          alert("Contraseña incorrecta");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login");
      }
    }
    else{
      try {
        const res = await axios.get(`http://localhost:3000/AppPetSitters/users/email/${email}`);
        if (res != null && res.data.password === password) {
          alert("Usuario encontrado")
          setUser(res.data);
          navigate("/home", { state: res.data });
        } else {
          alert("Contraseña incorrecta");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("Error during login");
      }
    }
  };

  return (
    <div style={style_container}>
      <img src={logo} alt="logo" />
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="checkbox" value={isPetSitter} onChange={(e)=>setIsPetSitter(e.target.value)}></input>
      </div>

      <Link to={"/olvideContrsena"}>Olvidaste tu contraseña?</Link>
      <button onClick={handleOnClickIniciarSesion}>Iniciar Sesión</button>
      <Link to={"/registrarse"}>
        <button onClick={handleOnClickregistrarse}>Registrarse</button>
      </Link>
    </div>
  );
};

export default IniciarSesion;
