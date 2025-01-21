import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";
import ReputacionComponentList from "../componentes/ReputacionComponentList";
import { useEffect,useState } from "react";
import axios from "axios";

const Reputacion = () => {
  const location = useLocation();
  const user = location.state;

  const [userUpdated, setUserUpdated] = useState(null);

  useEffect(() => {
    if (user.nombreCompleto !== undefined) {
      axios
        .get(`http://localhost:3000/AppPetSitters/petSitters/email/${user.email}`)
        .then((response) => setUserUpdated(response.data))
        .catch((error) => console.error("Error", error));
    } else {
      axios
        .get(`http://localhost:3000/AppPetSitters/users/email/${user.email}`)
        .then((response) => setUserUpdated(response.data))
        .catch((error) => console.error("Error", error));
    }
  }, [user]);

  return (
    <>
      <Head title={"Reputacion"} description={"Reputacion"} />
      <NavBar style={{ zIndex: 1000 }} user={user} />
      <h1>Reputacion</h1>
      {userUpdated && (
        <>
          {userUpdated.nombreCompleto === undefined ? (
            <h5>Como no eres Pet Sitter no tienes Reputacion</h5>
          ) : (
            <ReputacionComponentList itemList={userUpdated.reputacion}/>
          )}
        </>
      )}
      
    </>
  );
};

export default Reputacion;
