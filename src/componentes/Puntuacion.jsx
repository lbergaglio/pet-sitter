import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Puntuacion = (props) => {
  return (
    <div>
      {[...new Array(5)].map((star, index) => {
        return index < props ? <AiFillStar /> : <AiOutlineStar />;
      })}
    </div>
  );
};

export default Puntuacion;
