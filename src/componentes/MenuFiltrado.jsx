import PropTypes from "prop-types";

const style_container = {
  backgroundColor: "#E7ACE6",
  width: "265px",
};

const FilterMenu = ({ filters, selectedFilters, onFilterChange }) => {
  const handleCheckboxChange = (filterCategory, filterValue) => {
    onFilterChange(filterCategory, filterValue);
  };
  return (
    <div style={style_container}>
      {Object.keys(filters).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {filters[category].map((filter) => (
            <div key={filter}>
              <input
                type="checkbox"
                id={"${category}-${filter}"}
                checked={selectedFilters[category]?.includes(filter) || false}
                onChange={() => handleCheckboxChange(category, filter)}
              />
              <label htmlFor={"${category}-${filter}"}>{filter}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;

FilterMenu.propTypes = {
  filters: PropTypes.object,
  selectedFilters: PropTypes.object,
  onFilterChange: PropTypes.func,
};
