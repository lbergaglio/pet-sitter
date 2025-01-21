import CardList from "../componentes/CardList";
import Head from "../componentes/Head";
import FilterMenu from "../componentes/MenuFiltrado";
import NavBar from "../componentes/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const listaFiltros = {
  Mascota: [
    "Perro",
    "Gato",
    "Paloma",
    "Loro",
    "Caballo",
    "Vaca",
    "Chancho",
    "Pez",
  ],
  Zonas: [
    "Palermo",
    "Microcentro",
    "Recoleta",
    "Flores",
    "Floresta",
    "Mosnerrat",
    "Puerto Madero",
    "Almagro",
  ],
  Servicio: ["Adiestramiento", "Cuidador Domestico", "Paseo"],
  Puntuacion: [1, 2, 3, 4, 5],
  Frecuencia: ["Unica", "Diaria", "Semanal", "Mensual"],
};

const Services = () => {
  const location = useLocation();
  const user = location.state;
  console.log(user);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [petSitters, setPetSitters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/AppPetSitters/petSitters")
      .then((response) => setPetSitters(response.data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] || [];
      const isSelected = categoryFilters.includes(value);

      return {
        ...prevFilters,
        [category]: isSelected
          ? categoryFilters.filter((item) => item !== value)
          : [...categoryFilters, value],
      };
    });
  };

  const applyFilters = (cardList) => {
    return cardList.filter((card) => {
      return Object.keys(selectedFilters).every((category) => {
        if (!selectedFilters[category].length) return true;

        if (category === "Puntuacion") {
          return selectedFilters[category].includes(card.score);
        }
        /*
        if (category === "Servicio" || category === "Zonas" || category === "Mascota" || category === "Frecuencia") {
          return selectedFilters[category].some((value) =>
            card[category.toLowerCase()].includes(value)
          );
        }
*/
        if (Array.isArray(card[category])) {
          return selectedFilters[category].some((value) =>
            card[category].includes(value)
          );
        }

        return selectedFilters[category].includes(card[category]);
      });
    });
  };

  const filteredProducts = applyFilters(petSitters);

  return (
    <>
      <Head title={"Servicios"} description={"Inicio"} />
      <NavBar style={{ zIndex: 1000 }} user={user} />
      <div style={{ display: "flex" }}>
        <FilterMenu
          filters={listaFiltros}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        <CardList cardList={filteredProducts} user={user} />
      </div>
    </>
  );
};

export default Services;
