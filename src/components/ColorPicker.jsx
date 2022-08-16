import React, { useState } from "react";
import PropTypes from "prop-types";
import { CompactPicker } from "react-color";

function ColorPicker({ onChange }) {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState();

  const handleToggle = () => {
    setShow(!show);
  };

  const handleChange = (pickedColor) => {
    setColor(pickedColor.hex);
    onChange(pickedColor.hex);
    handleToggle();
  };

  return (
    <div className="react-tags-color-picker">
      <div
        style={{ backgroundColor: color }}
        className="react-tags-color-picker-toggle"
        onClick={handleToggle}
        aria-hidden="true"
        title="Pick a color"
      />
      {show && (
        <div className="react-tags-color-picker-popover">
          <div
            className="react-tags-color-picker-cover"
            onClick={handleToggle}
            aria-hidden="true"
          />
          <CompactPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
