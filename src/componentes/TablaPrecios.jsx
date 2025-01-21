import PropTypes, { string } from "prop-types";

const header_horizontal = [
  "Frecuencia",
  "Adiestramiento",
  "Domestico",
  "Paseo",
];

const style_table = { margin: "auto" };
const style_element_table = { border: "1px solid black", padding: 10 };

const TablaPrecios = ({ data }) => {
  console.log({ data });
  return (
    <>
      <table style={style_table}>
        <thead>
          <tr style={style_element_table}>
            {header_horizontal.map((header, headerIndex) => (
              <th key={headerIndex} style={style_element_table}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={style_element_table}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} style={style_element_table}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaPrecios;

TablaPrecios.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]))),
};
