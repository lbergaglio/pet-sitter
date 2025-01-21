import NavBarSignUp from "../componentes/NavBarSignUp";
import imagenMascotas from "../../png/mascotas.png";

const style_text = {
  width: 800,
  margin: "auto",
  padding: 30,
};

const Start = () => {
  return (
    <>
      <NavBarSignUp />
      <h4 style={style_text}>
        En PET SITTING, sabemos que tus mascotas son parte importante de tu
        familia. Por eso, ofrecemos un servicio de pet sitting profesional,
        confiable y lleno de amor. Nuestro equipo de cuidadores experimentados
        está dedicado a brindar el mejor cuidado posible, asegurándose de que
        tus amigos peludos estén felices, seguros y bien atendidos mientras tú
        no estás.
      </h4>
      <img src={imagenMascotas} style={{ height: 490 }}></img>
    </>
  );
};

export default Start;
