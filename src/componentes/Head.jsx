import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;

Head.protoTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
