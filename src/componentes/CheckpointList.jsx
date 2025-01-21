import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckpointList = ({ checkpoints, title, selectedCheckpoint, onCheckpointSelect }) => {

  const handleChange = (checkpoint) => {
    onCheckpointSelect(checkpoint);
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <h3>{title}</h3>
      <ul style={{listStyle:"none"}}>
        {checkpoints.map((checkpoint, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`checkpoint-${index}`}
              name={`checkpoint-${title}`}
              value={checkpoint}
              checked={selectedCheckpoint === checkpoint}
              onChange={() => handleChange(checkpoint)}
            />
            <label htmlFor={`checkpoint-${index}`}>{checkpoint}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

CheckpointList.propTypes = {
  checkpoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  selectedCheckpoint: PropTypes.string,
  onCheckpointSelect: PropTypes.func.isRequired,
};

export default CheckpointList;
