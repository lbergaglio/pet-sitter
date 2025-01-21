import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Help from "./pages/Help";
import MiPerfil from "./pages/MiPerfil";
import Notificaciones from "./pages/Notificaciones";
import Historial from "./pages/Historial";
import Reputacion from "./pages/Reputacion";
import CerrarSesion from "./pages/CerrarSesion";
import Start from "./pages/Start";
import IniciarSesion from "./pages/IniciarSesion";
import Registrarse from "./pages/Registrarse";
import PetSitter from "./pages/PetSitter";
import OlvideContrasena from "./pages/OlvideContrasena";
import Contratar from "./pages/Contratar";
import Calificar from "./pages/Calificar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleRegister = (user) => {
    setUser(user);
  };
  return (
    <>
      <Router>
        <Routes style={{ zIndex: 1 }}>
          <Route path="/" element={<Start />} />
          <Route
            path="/iniciarSesion"
            element={<IniciarSesion onLogin={handleLogin} />}
          />
          <Route
            path="/registrarse"
            element={<Registrarse handleRegister={handleRegister} />}
          />
          <Route path="/olvideContrasena" element={<OlvideContrasena />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/petSitter" element={<PetSitter />} />
          <Route path="/contratar" element={<Contratar />} />
          <Route path="/calificar" element={<Calificar />} />
          <Route path="/help" element={<Help />} />
          <Route path="/miPerfil" element={<MiPerfil />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/reputacion" element={<Reputacion />} />
          <Route path="/cerrarSesion" element={<CerrarSesion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
