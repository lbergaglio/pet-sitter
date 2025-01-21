import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import CardList from "../componentes/CardList";

const Historial = () => {
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
      <Head title={"Historial"} description={"Historial"} />
      <NavBar style={{ zIndex: 1000 }} user={user}/>
      <h1>Historial</h1>
      {userUpdated && (
        <>
          {userUpdated.nombreCompleto === undefined ? (
            <CardList cardList={userUpdated.history} user={userUpdated} />
          ) : (
            <CardList cardList={userUpdated.historial} user={userUpdated} />
          )}
        </>
      )}
    </>
  );
};

export default Historial;
