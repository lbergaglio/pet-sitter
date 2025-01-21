import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation } from "react-router-dom";
import NotificacionesComponentList from "../componentes/NotificacionesComponentList";
import { useEffect, useState } from "react";
import axios from "axios";

const Notificaciones = () => {
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

  console.log(user);
  console.log(userUpdated);

  return (
    <>
      <NavBar style={{ zIndex: 1000 }} user={user} />
      <Head title={"Notificaciones"} description={"Notificaciones"} />
      <h1>Notificaciones</h1>
      {userUpdated && (
        <>
          {userUpdated.nombreCompleto === undefined ? (
            <NotificacionesComponentList itemList={userUpdated.notifications} user={userUpdated} />
          ) : (
            <NotificacionesComponentList itemList={userUpdated.notificaciones} user={userUpdated} />
          )}
        </>
      )}
    </>
  );
};

export default Notificaciones;
