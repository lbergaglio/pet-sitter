import { Link } from "react-router-dom";
import logo from "/png/logoPetSitting.png";

const navStyle = {
  marginLeft: 0,
  padding: 0,
  listStyleType: "none",
  backgroundColor: "pink",
  height: 50,
};

const ulStyle = {
  padding: 0,
  display: "flex",
  listStyle: "none",
  marginLeft: "auto",
  height: 50,
};

const liStyle = {
  padding: 10,
  marginLeft: "auto",
  border: "1px solid black",
  backgroundColor: "pink",
};

const custom_link = {
  fontSize: 20,
  font: "Arial",
  color: "black",
  textDecoration: "none",
  marginLeft: "auto",
};

const NavBarSignUp = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/home">
            <img src={logo} style={{ height: 50 }} />
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/iniciarSesion" style={custom_link}>
            Iniciar Sesion
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/registrarse" style={custom_link}>
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarSignUp;
