import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
const CerrarSesion = () => {
  return (
    <>
      <Head title={"Pet-Sitter Marketplace"} description={"Inicio"} />
      <NavBar style={{ zIndex: 1000 }} />
      <h1>Haz cerrado Sesion</h1>
    </>
  );
};

export default CerrarSesion;
