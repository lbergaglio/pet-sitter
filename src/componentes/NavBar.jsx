import { Link,useNavigate} from "react-router-dom";
import logo from "/png/logoPetSitting.png";
import MenuDesplegable from "./MenuDesplegable";
import PropTypes from "prop-types";


const navStyle = {
  marginLeft: 0,
  backgroundColor: "pink",
  height: 50,
};

const ulStyle = {
  padding: 0,
  display: "flex",
  listStyle: "none",
  marginLeft: "auto",
  position:"relative",
  zIndex:"10000"
};

const spanStyle = {
  padding: 10,
};

const custom_link = {
  fontSize: 20,
  font: "Arial",
  color: "black",
  textDecoration: "none",
};



const NavBar = ({user}) => {
  const navigate = useNavigate();

  console.log("NavBar:",user);

  const handleClickPasarInfoAHome= () => {
    navigate("/home", {state: user});
  };
  const handleClickPasarInfoAServices= () => {
    navigate("/services", {state: user});
  };
  const handleClickPasarInfoAHelp= () => {
    navigate("/help", {state: user});
  };
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
            <img src={logo} style={{ height: 50 }} />
        </li>
        <li style={spanStyle}>
          <button onClick={handleClickPasarInfoAHome}>Inicio</button>
        </li>
        <li style={spanStyle}>
        <button onClick={handleClickPasarInfoAServices}>Servicios</button>
        </li>
        <li style={spanStyle}>
        <button onClick={handleClickPasarInfoAHelp}>Ayuda</button>
        </li>
        <li style={{ marginLeft: "auto" }}>
          <MenuDesplegable user={user} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  user: PropTypes.object,
};
