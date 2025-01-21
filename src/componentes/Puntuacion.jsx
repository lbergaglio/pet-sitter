import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

const Puntuacion = ({ score }) => {
  return (
    <div>
      {[...new Array(5)].map((star, index) => {
        return index < score ? (
          <AiFillStar key={index} style={{ fontSize: 25 }} />
        ) : (
          <AiOutlineStar key={index} style={{ fontSize: 25 }} />
        );
      })}
    </div>
  );
};

export default Puntuacion;

Puntuacion.propTypes = {
  score: PropTypes.number,
};
