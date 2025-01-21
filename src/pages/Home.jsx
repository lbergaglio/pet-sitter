import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import CardList from "../componentes/CardList";
import imagenMascotas from "../../png/mascota.png";
import PropTypes from "prop-types";
import axios from "axios";
import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [petSitters,setPetSitters] = useState([]);
  const location = useLocation();
  const user = location.state;
  console.log(user);

  useEffect(() => {
    axios
      .get("http://localhost:3000/AppPetSitters/petSitters")
      .then((response) => setPetSitters(response.data))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <div>
      <Head title={"Pet-Sitter Marketplace"} description={"Inicio"} />
      <NavBar user={user} />
      <img src={imagenMascotas} style={{ height: 300 }}></img>
      <CardList cardList={petSitters} user={user}/>
    </div>
  );
};

export default Home;
