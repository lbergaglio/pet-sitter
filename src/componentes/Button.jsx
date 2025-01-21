import PropTypes from "prop-types";

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "pink",
    color: "black",
    border: "1px solid black",
    borderRadius: "5px",
    outline: "none",
  },
};

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
