import Card from "./Card";
import PropTypes from "prop-types";

const style_container = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 20,
  padding: 20,
};

const CardList = ({ cardList , user}) => {
  return (
    <div style={style_container}>
      {cardList.map((card) => (
        <Card key={card.id} item={card} user={user}/>
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object),
  user:PropTypes.object,
};
