import { useState } from "react";
import Head from "../componentes/Head";
import NavBar from "../componentes/NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const Help = () => {
  const location = useLocation();
  const user = location.state;
  const [isOpenUno, setIsOpenUno] = useState(false);
  const [isOpenDos, setIsOpenDos] = useState(false);
  const [isOpenTres, setIsOpenTres] = useState(false);

  const toggleAnswerUno = () => {
    setIsOpenUno(!isOpenUno);
  };
  const toggleAnswerDos = () => {
    setIsOpenDos(!isOpenDos);
  };
  const toggleAnswerTres = () => {
    setIsOpenTres(!isOpenTres);
  };

  return (
    <>
      <Head title={"Help page"} description={"help"} />
      <NavBar style={{ zIndex: 1000 }} user={user}/>
      <h1>Help page</h1>
      <div>
        <button onClick={toggleAnswerUno}>
          ¿Cuál es el proceso de selección para los pet sitters que trabajan con
          ustedes?
        </button>
        {isOpenUno && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerDos}>
          ¿Qué tipo de verificación de antecedentes se realiza a los pet
          sitters?
        </button>
        {isOpenDos && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerTres}>
          ¿Cómo se gestionan las quejas o problemas con los pet sitters?
        </button>
        {isOpenTres && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerTres}>
          ¿Pueden proporcionar referencias de clientes anteriores?
        </button>
        {isOpenTres && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerTres}>
          ¿Cuánto tiempo lleva operando su servicio de pet sitting?
        </button>
        {isOpenTres && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerTres}>
          ¿Qué tipo de experiencia tienen los pet sitters en su plataforma?
        </button>
        {isOpenTres && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleAnswerTres}>
          ¿El servicio ofrece algún tipo de seguro o garantía en caso de
          accidente o emergencia?
        </button>
        {isOpenTres && (
          <ul>
            <li>asdasdasdasdasdasdasdasdasdasd</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Help;
